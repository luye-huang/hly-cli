# -*- coding: utf-8 -*
from fabric.decorators import runs_once
from fabric.api import env,local,run,put,lcd
import json
import os
import sys
import subprocess

def hosts(app_env):
    with open('profiles/hosts.json') as fp:
        hosts = json.load(fp)
        env.user = 'root'
        env.hosts = hosts[app_env]
        env.app_env = app_env

def upgradePackages():
    with open('package.json') as fp:
        packs = json.load(fp)
        dependencies = packs['dependencies']
        execCheckout()
        for (k, v) in dependencies.items():
            if (k[0] == '@'):
                ver = getLatestVersion(k)
                log('[UPGRADE] upgrade package `%s` to %s' % tuple([k, ver]))
                subprocess.call(['yarn', 'add', k + '@' + ver])
        execGitCommitPush()

@runs_once
def package():
    app_env = env.app_env
    local('yarn install --force')
    if app_env == "test" or app_env == "qa-test":
        local('yarn run test')
    elif app_env == "dist":
        local('yarn run dist')
    else:
        print "env error!"

def deploy():
    app_env = env.app_env
    if app_env == "qa-test":
        app_env = "test"
    if int(run(" [ -e '/data/project/static/izy-examples' ] && echo 1 || echo 0")) == 0:
            run("mkdir -p /data/project/static/izy-examples")
    remote_path = "/data/project/static/izy-examples/"
    file_path = "pages/" + app_env + "/*.html"
    put(file_path, remote_path)
    file_path = app_env + "/"
    put(file_path, remote_path)