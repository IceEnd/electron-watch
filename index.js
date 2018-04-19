const path = require('path')
const { exec, spawn } = require('child_process');
const electron = require('electron');
const chokidar = require('chokidar');

/**
 * 
 * @param {Function} fn    执行函数
 * @param {Number} delay   延迟时间，单位是毫秒(ms)，默认3000ms
 *
 * @return {Function}     返回一个“防反跳”了的函数
 */
function debounce(fn, delay = 3000) {
  let timer;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay);
  };
}

module.exports = (pathName, command, cwd, delay = 3000) => {
  const watcher = chokidar.watch(pathName, {
    ignored: /(^|[/\\])\../,
    persistent: true,
  });
  watcher.on('change', debounce(() => {
    const child = spawn('npm', ['run', command], {
      cwd,
      detached: true,
      stdio: 'inherit'
    })
    child.unref();
    electron.app.quit();
  }, delay));
}