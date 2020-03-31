let saveDialog = document.querySelector('#saveDialog');

const {remote} = require('electron');

saveDialog.onclick = function () {
  remote.dialog.showSaveDialog({
    title: 'Save File',
    defaultPath: '/Users/poetry/Downloads/',
    // filters 指定一个文件类型数组，用于规定用户可见或可选的特定类型范围
    filters: [
      { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
      { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
      { name: 'Custom File Type', extensions: ['as'] },
      { name: 'All Files', extensions: ['*'] }
    ]
  }, function (path) {
    // 不是真的保存 ，具体还需nodejs处理
    console.log(path)
  })
};
