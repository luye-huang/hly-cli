import colors from 'colors/safe';
import path from 'path';
import vfs from 'vinyl-fs';
import {exec, spawn, spawnSync} from 'child_process';

const GENERATOR_PATH_PREFIX = path.join(__dirname, '../../../template');

export default class Command {
    process(project) {
        console.log(colors.yellow(`Start to create project: ${project.projectName}`));
        this.generateDir(project.projectName, '/app')
            .then(this.generateDir(`${project.projectName}/tool`, `/tool/${project.tool}`, project.tool))
            .then(this.generateDir(`${project.projectName}/common`, 'common', project.common))
            // .then(this.installPackage(project.projectName))
            .catch(error => {
                console.log('');
                console.error(colors.red(error.message));
                process.exit(1);
            });
    }

    gotoDir(path) {
        return new Promise((resolve, reject) => {
            const child = exec(`cd ${path}`,
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
     * 创建文件夹及文件
     */
    generateDir(dirName, subDir, values = 'true') {
        console.log(values);
        if (values == '不需要' || values.trim() == '' || (values.constructor == Array && values[0] == '不需要')) {
            return Promise.resolve();
        }
        console.log('Create folder %s', dirName);
        return new Promise((resolve, reject) => {
            if (subDir == 'common') {
                values.forEach(value => {

                });
            } else {

            }
            const child = exec(`mkdir -p ${dirName}`,
                (error, stdout, stderr) => {
                    if (error != null) {
                        reject(error);
                    }
                    let sourceDir = path.resolve('.', `./${dirName}`);
                    console.log(sourceDir);
                    console.log(GENERATOR_PATH_PREFIX + subDir);
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
    createDir(project) {
        const projectName = project.name;
        console.log('   Create folder %s', project.name);
        return new Promise((resolve, reject) => {
            const child = exec(`mkdir ${projectName}`,
                (error, stdout, stderr) => {
                    if (error != null) {
                        reject(error);
                    }
                    const sourceDir = path.resolve('.', `./${projectName}`);
                    resolve({
                        projectName,
                        sourceDir,
                        templatePath: GENERATOR_PATH_PREFIX
                    });
                }
            );
        });
    }

    /**
     * 安装依赖
     */
    installPackage(dir) {
        const targetDirectory = path.resolve('.', `./${dir}`);
        console.log(colors.yellow('Installing begin: npm install -d'));
        return new Promise((resolve, reject) => {
            const child = spawn(process.platform === "win32" ? "npm.cmd" : "npm", ['install'], {
                cwd: targetDirectory,
                stdio: "inherit"
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