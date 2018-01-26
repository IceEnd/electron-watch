const path = require('path')
const { exec } = require('child_process');
const electron = require('electron');
const chokidar = require('chokidar')

module.exports = (pathName, command, cwd) => {
  const watcher = chokidar.watch(pathName, {
    ignored: /(^|[/\\])\../,
    persistent: true,
  });
  watcher.on('change', () => {
    electron.app.exit(0);
    exec(command, {
      cwd,
    });
  });
}