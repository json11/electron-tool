var {
  Menu, Tray, app, BrowserWindow
} = require('electron');

const path = require('path');

var appIcon = new Tray(path.join(__dirname, '../static/app-icon.png'));

const menu = Menu.buildFromTemplate([
  {
    label: '设置',
    click: function() {} //打开相应页面
  },
  {
    label: '帮助',
    click: function() {}
  },
  {
    label: '关于',
    click: function() {}
  },
  {
    label: '退出',
    click: function() {
      // BrowserWindow.getFocusedWindow().webContents().send('close-main-window');
      app.quit();
    }
  }])
// 鼠标放上去提示信息
appIcon.setToolTip('hello poetries');
appIcon.setContextMenu(menu);


var count = 0;
timer = setInterval(function() {
    count++;
    if (count % 2 == 0) {
      appIcon.setImage(path.join(__dirname, '../static/default.png'))
    } else {
      appIcon.setImage(path.join(__dirname, '../static/app-icon.png'))
    }
  },
  500);


