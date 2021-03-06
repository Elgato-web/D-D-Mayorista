"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const path = require("path");
const crypto_js_1 = require("crypto-js");
const recentItems_1 = require("./recentItems");
const gitProjectLocator_1 = require("./gitProjectLocator");
const ProjectQuickPick_1 = require("./domain/ProjectQuickPick");
const FOLDER = '\uD83D\uDCC2';
const GLOBE = '\uD83C\uDF10';
class GitProjectManager {
    /**
     * Creates an instance of GitProjectManager.
     *
     * @param {object} config
     * @param {Memento} state
     */
    constructor(config, state) {
        this.config = config;
        this.state = state;
        this.loadedRepoListFromFile = false;
        this.repoList = [];
        this.storedLists = new Map();
        this.recentList = new recentItems_1.default(this.state, config.recentProjectListSize);
        this.updateRepoList = this.updateRepoList.bind(this);
        this.addRepoInRepoList = this.addRepoInRepoList.bind(this);
    }
    getQuickPickList() {
        this.repoList = this.repoList.sort((a, b) => {
            return a.name > b.name ? 1 : -1;
        });
        // let homeDir = this.getHomePath().replace(new RegExp(`${path.sep}$`), '') + path.sep;
        return this.repoList.map(repo => {
            let description = '';
            if (this.config.displayProjectPath || !this.config.checkRemoteOrigin) {
                let repoDir = repo.directory;
                // if (repoDir.startsWith(homeDir)) {
                //     repoDir = '~/' + repoDir.substring(homeDir.length);
                // }
                description = `${FOLDER} ${repoDir}`;
            }
            if (this.config.checkRemoteOrigin) {
                description = `${GLOBE} ${repo.repository} ` + description;
            }
            var item = new ProjectQuickPick_1.default();
            item.label = repo.name;
            item.description = description.trim();
            item.directory = repo.directory;
            return item;
        });
    }
    handleError(error) {
        vscode.window.showErrorMessage(`Error in GPM Manager ${error}`);
        return error;
    }
    get storeDataBetweenSessions() {
        return this.config.storeRepositoriesBetweenSessions;
    }
    saveList() {
        if (!this.storeDataBetweenSessions) {
            return;
        }
        const lists = Array.from(this.storedLists.entries()).reduce((storage, [hash, repos]) => (Object.assign(Object.assign({}, storage), { [hash]: repos })), {});
        this.state.update('lists', lists);
    }
    loadList() {
        if (!this.storeDataBetweenSessions) {
            return false;
        }
        const list = this.state.get('lists', false);
        if (!list) {
            return false;
        }
        this.storedLists = new Map(Array.from(Object.entries(list)));
        this.loadedRepoListFromFile = true;
        return true;
    }
    saveRepositoryInfo(directories) {
        this.storedLists.set(this.getDirectoriesHash(directories), this.repoList);
        this.saveList();
    }
    loadRepositoryInfo() {
        if (this.loadedRepoListFromFile) {
            return false;
        }
        return this.loadList();
    }
    addRepoInRepoList(repoInfo) {
        let map = this.repoList.map((info) => {
            return info.directory;
        });
        if (map.indexOf(repoInfo.directory) === -1) {
            this.repoList.push(repoInfo);
        }
    }
    getProjectsFolders(subFolder = '') {
        return __awaiter(this, void 0, void 0, function* () {
            var isFolderConfigured = this.config.baseProjectFolders.length > 0;
            if (!isFolderConfigured) {
                throw new Error('You need to configure at least one folder in "gitProjectManager.baseProjectsFolders" before searching for projects.');
            }
            var baseProjectsFolders = subFolder === '' ? vscode.workspace.getConfiguration('gitProjectManager').get('baseProjectsFolders') || [] : [subFolder];
            var resolvedProjectsFolders = baseProjectsFolders.map(path => {
                return this.resolveEnvironmentVariables(process.platform, path);
            });
            return resolvedProjectsFolders;
        });
    }
    getHomePath() {
        return process.env.HOME || process.env.HOMEPATH;
    }
    resolveEnvironmentVariables(processPlatform, aPath) {
        var envVarMatcher = processPlatform === 'win32' ? /%([^%]+)%/g : /\$([^\/]+)/g;
        let resolvedPath = aPath.replace(envVarMatcher, (_, key) => process.env[key] || '');
        const homePath = this.getHomePath() || '';
        return resolvedPath.charAt(0) === '~' ? path.join(homePath, resolvedPath.substr(1)) : resolvedPath;
    }
    ;
    /**
     * Show the list of found Git projects, and open the choosed project
     *
     * @param {Object} opts Aditional options, currently supporting only subfolders
     * @param {boolean} openInNewWindow If true, will open the selected project in a new windows, regardless of the OpenInNewWindow configuration
     *
     * @memberOf GitProjectManager
     */
    showProjectList(openInNewWindow, baseFolder) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var options = {
                    placeHolder: 'Select a folder to open:      (it may take a few seconds to search the folders the first time)'
                };
                var projectsPromise = this.getProjectsList(yield this.getProjectsFolders(baseFolder));
                var selected = yield vscode.window.showQuickPick(projectsPromise, options);
                if (selected) {
                    this.openProject(selected, openInNewWindow);
                }
            }
            catch (e) {
                vscode.window.showInformationMessage(`Error while showing Project list: ${e}`);
            }
        });
    }
    ;
    /**
     * Adds all projects added as unversioned in vsCode config
     *
     * @param {DirList} dirList
     */
    addUnversionedProjects(dirList) {
        let unversioned = this.config.unversionedProjects;
        unversioned.forEach(proj => dirList.add(proj));
        return dirList.dirs;
    }
    updateRepoList(dirList, directories) {
        dirList.forEach(this.addRepoInRepoList);
        this.saveRepositoryInfo(directories);
        return dirList;
    }
    getProjectsList(directories) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repoList = this.storedLists.get(this.getDirectoriesHash(directories));
            if (this.repoList) {
                return this.getQuickPickList();
            }
            this.clearProjectList();
            if (this.loadRepositoryInfo()) {
                this.repoList = this.storedLists.get(this.getDirectoriesHash(directories));
                if (this.repoList) {
                    return this.getQuickPickList();
                }
            }
            const projectLocator = new gitProjectLocator_1.default(this.config);
            yield projectLocator.locateGitProjects(directories)
                .then(dirList => this.addUnversionedProjects(dirList))
                .then(dirList => this.updateRepoList(dirList, directories));
            return this.getQuickPickList();
        });
    }
    ;
    openProject(pickedObj, openInNewWindow = false) {
        let projectPath = this.getProjectPath(pickedObj), uri = vscode.Uri.file(projectPath), newWindow = openInNewWindow || (this.config.openInNewWindow && !!vscode.workspace.workspaceFolders);
        this.recentList.addProject(projectPath, '');
        vscode.commands.executeCommand('vscode.openFolder', uri, newWindow);
    }
    getProjectPath(pickedObj) {
        if (pickedObj instanceof ProjectQuickPick_1.default) {
            return pickedObj.directory;
        }
        return pickedObj;
    }
    internalRefresh(folders, suppressMessage) {
        this.storedLists = new Map();
        this.getProjectsList(folders)
            .then(() => {
            if (!suppressMessage) {
                vscode.window.setStatusBarMessage('Git Project Manager - Project List Refreshed', 3000);
            }
        })
            .catch((error) => {
            if (!suppressMessage) {
                this.handleError(error);
            }
        });
    }
    clearProjectList() {
        this.repoList = [];
    }
    /**
     * Refreshs the current list of projects
     * @param {boolean} suppressMessage if true, no warning message will be shown.
     */
    refreshList(suppressMessage = false) {
        this.clearProjectList();
        this.getProjectsFolders()
            .then((folders) => {
            this.internalRefresh(folders, suppressMessage);
        })
            .catch((error) => {
            if (!suppressMessage) {
                this.handleError(error);
            }
        });
    }
    ;
    refreshSpecificFolder() {
        var options = {
            placeHolder: 'Select a folder to open:      (it may take a few seconds to search the folders the first time)'
        };
        this.getProjectsFolders()
            .then((list) => {
            vscode.window.showQuickPick(list, options)
                .then((selection) => {
                if (!selection) {
                    return;
                }
                this.internalRefresh([selection], false);
            });
        })
            .catch((error) => {
            console.log(error);
        });
    }
    ;
    openRecentProjects() {
        let self = this;
        if (this.recentList.list.length === 0) {
            vscode.window.showInformationMessage('It seems you haven\'t opened any projects using Git Project Manager extension yet!');
        }
        vscode.window.showQuickPick(this.recentList.list.map(i => {
            return {
                label: path.basename(i.projectPath),
                description: i.projectPath
            };
        })).then(selected => {
            if (selected) {
                self.openProject(selected.description);
            }
        });
    }
    /**
     * Calculate a hash of directories list
     *
     * @param {String[]} directories
     * @returns {string} The hash of directories list
     *
     * @memberOf GitProjectManager
     */
    getDirectoriesHash(directories) {
        return (0, crypto_js_1.SHA256)(directories.join('')).toString();
    }
    showProjectsFromSubFolder() {
        vscode.window.showQuickPick(this.getProjectsFolders(), {
            canPickMany: false,
            placeHolder: 'Pick a folder to see the subfolder projects'
        }).then((folder) => {
            if (!folder) {
                return;
            }
            this.showProjectList(false, folder);
        });
    }
    getChannelPath() {
        return vscode.env.appName.replace("Visual Studio ", "");
    }
}
exports.default = GitProjectManager;
//# sourceMappingURL=gitProjectManager.js.map