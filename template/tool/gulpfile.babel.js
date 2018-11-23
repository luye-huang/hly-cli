/**
 * Created by luye on 21/11/2018.
 */
import path from 'path';
import template from 'gulp-template';
import gulp from 'gulp';
import rename from 'gulp-rename';
import yargs from 'yargs';
'use strict';

console.log('Welcome!');

let resolveToComponents = (glob = '') => {
    return path.join('src/components', glob); // app/components/{glob}
};

gulp.task('component', () => {
    const cap = (val) => {
        return val.charAt(0).toUpperCase() + val.slice(1);
    };
    const name = yargs.argv.name;
    const parent = yargs.argv.parent || '';
    const destComponentsPath = path.join(resolveToComponents(), parent);

    let gulpComponents = gulp.src(path.join(__dirname, '../template/component', '*.**'))
        .pipe(template({
            name: name,
            upCaseName: cap(name),
            dateTime: new Date()
        }))
        .pipe(rename((path) => {
            path.basename = path.basename.replace('temp', name);
        }))
        .pipe(gulp.dest(destComponentsPath));
    return gulpComponents;
});

