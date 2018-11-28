import colors from 'colors/safe';
import path from 'path';
import vfs from 'vinyl-fs';
var fs = require("fs");
import {exec, spawn, spawnSync} from 'child_process';

const GERNERATING_FOLDER = 'cli-files';
const GENERATOR_PATH_PREFIX = path.join(__dirname, '../../../template');

export default class Command {
    process(project) {
        project.projectName = project.projectName ? project.projectName : GERNERATING_FOLDER;
        console.log(colors.yellow(`Start to create project: ${project.projectName}`));
        this.generateDir(project.projectName, '/app')
            .then(() => project.tool && this.generateDir(`${project.projectName}/tool`, `/tool/${project.tool}`, project.tool))
            .then(() => project.common && this.generateDir(`${project.projectName}/common`, 'common', project.common))
            .then(() => this.installPackage(project.projectName))
            .catch(error => {
                console.error(colors.red(error.message));
                process.exit(1);
            });
    }

    /**
     * 创建文件夹及文件
     */
    generateDir(dirName, subDir, values = 'true') {
        if (dirName == GERNERATING_FOLDER) {
            return this.createDir(dirName);
            // return Promise.resolve();
        }
        console.log('Create folder %s', dirName);
        return new Promise((resolve, reject) => {
            if (subDir == 'common') {
                values.forEach(value => {
                    const child = exec(`mkdir -p ${dirName}/${value}`,
                        (error, stdout, stderr) => {
                            if (error != null) {
                                reject(error);
                            }
                            let sourceDir = path.resolve('.', `./${dirName}/${value}`);
                            vfs.src('**/*', {cwd: `${GENERATOR_PATH_PREFIX}/${subDir}/${value}`, dot: true})
                                .pipe(vfs.dest(sourceDir))
                                .on('end', () => {

                                })
                                .on('error', err => {
                                    reject(err);
                                })
                                .resume();
                        }
                    );
                });
                resolve();
            } else {
                const child = exec(`mkdir -p ${dirName}`,
                    (error, stdout, stderr) => {
                        if (error != null) {
                            reject(error);
                        }
                        let sourceDir = path.resolve('.', `./${dirName}`);
                        vfs.src('**/*', {cwd: GENERATOR_PATH_PREFIX + subDir, dot: true})
                            .pipe(vfs.dest(sourceDir))
                            .on('end', () => {
                                resolve();
                            })
                            .on('error', err => {
                                reject(err);
                            })
                            .resume();
                    }
                );
            }
        });
    }

    /**
     * 拷贝需求的文件, 并且配置一下
     */
    getGenerator(info) {
        const {projectName, sourceDir, templatePath} = info;
        return new Promise((resolve, reject) => {
            vfs.src('**/*', {cwd: templatePath, dot: true})
                .pipe(vfs.dest(sourceDir))
                .on('end', () => {
                    resolve(sourceDir);
                })
                .on('error', err => {
                    reject(err);
                })
                .resume();
        });
    }

    /**
     * 创建文件夹
     */
    createDir(projectName) {
        return new Promise((resolve, reject) => {
            const child = exec(`mkdir ${projectName}`,
                (error, stdout, stderr) => {
                    if (error != null) {
                        reject(error);
                    }
                    resolve();
                }
            );
        });
    }

    /**
     * 安装依赖
     */
    installPackage(dir) {
        if(dir == GERNERATING_FOLDER){
            return Promise.resolve();
        }
        const targetDirectory = path.resolve('.', `./${dir}`);
        // fs.stat(targetDirectory, function (err, stats) {
        //     console.log('stats', stats);
        // });
        console.log(colors.yellow('Installing begin: sudo npm install -d. Please patiently hold on until completion info!'));
        return new Promise((resolve, reject) => {
            const child = spawn(process.platform === "win32" ? "npm.cmd" : "npm", ['install'], {
                cwd: targetDirectory,
            });
            child.on('close', () => {
                console.log(colors.green('install complete'));
                resolve(targetDirectory);
            });
            child.on('error', err => {
                console.error(colors.red(err));
                reject();
            });
        });
    }
}