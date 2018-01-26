const path = require('path')
const { exec, spawn } = require('child_process');
const electron = require('electron');
const chokidar = require('chokidar')

module.exports = (pathName, command, cwd) => {
  const watcher = chokidar.watch(pathName, {
    ignored: /(^|[/\\])\../,
    persistent: true,
  });
  watcher.on('change', () => {
    const child = spawn('npm', ['run', command], {
      cwd,
      detached: true,
      stdio: 'inherit'
    });
    child.unref();
    electron.app.quit();
  });
}