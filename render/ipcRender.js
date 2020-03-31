//渲染进程

let send = document.querySelector('#send');
const { ipcRenderer } = require('electron');

send.onclick = function () {
  // 传递消息给主进程
  // 异步
  ipcRenderer.send('sendMsg', {name:'poetries', age: 23})
};


//渲染进程
let sendFeedback = document.querySelector('#sendFeedback');

// const { ipcRenderer } = require('electron');

// 向主进程发送消息
sendFeedback.onclick = function () {
  // 触发主进程里面的方法
  ipcRenderer.send('sendFeedback', {name:'poetries', age: 23})
};

// 向主进程发送消息后，接收主进程广播的事件
ipcRenderer.on('sendFeedbackToRender', (e, data)=>{
  console.log('event\n ', e)
  console.log('data\n ', data)
});

// 渲染进程和主进程同步通信

let sendSync = document.querySelector('#sendSync');

// 渲染进程和主进程同步通信
sendSync.onclick = function () {
  // 同步广播数据
  let msg =  ipcRenderer.sendSync('sendsync', {name:'poetries', age: 23})

  // 同步返回主进程反馈的数据
  console.log('msg\n ', msg)
};
