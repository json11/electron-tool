// h5api实现通知
const path = require('path')

let options = {
  title: 'electron 通知API',
  body: 'hello poetries',
  icon: '../static/app-icon.png' // 通知图标
}


document.querySelector('#showNotification').onclick = function () {
  let myNotification  = new window.Notification(options.title, options)

  // 消息可点击
  myNotification.onclick = function () {
    console.log('click notification')
  }
};
