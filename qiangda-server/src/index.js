var express = require('express')
var app = express()
var path = require('path')
var server = require('http').createServer(app)
var io = require('socket.io')(server)
var port = process.env.PORT || 3000

server.listen(port, () => {
  console.log('server linstening at port %d', port)
})

var numUsers = []

io.on('connection', socket => {
  console.log('connection success')

  socket.on('login', user => {
    console.log('login', user)
    login(socket, user)

    socket.emit('loginSuccess', socket.id)
  })

  socket.on('online', user => {
    console.log('online', user)
    login(socket, user)
  })

  socket.on('getUserInfo', username => {
    // numUsers.forEach(item => {
    //   if (username === item.username) {
    //     socket.emit('getUserInfoResp', item)
    //   }
    // })
    console.log('server', username)

    login(socket, { username: username, userid: socket.id })
    
    socket.emit('getUserInfoResp', { username: username, userid: socket.id })

  })


})

function login(socket, user) {
  console.log(user)
  if (user.userid) {
    if (!isExit(user)) {
      user.userid = socket.username
      numUsers.push(user)
    }
  } else {
    user.userid = user.userid
    numUsers.push(user)
  }
  console.log(numUsers)
}

function isExit(user) {
  let flag = false
  numUsers.forEach(item => {
    if (item.username === user.username) {
      flag = true
    }
  })

  return flag
}
