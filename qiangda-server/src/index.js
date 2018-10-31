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
    login(socket, user)
    socket.emit('sendUserInfo', {
      userinfo: {
        username: user.username,
        userid: socket.id,
      },
      userlist: numUsers,
    })
  })

  socket.on('chooseRole', user => {
    numUsers.forEach(item => {
      if (user.username === item.username) {
        item.role = user.role;
      }
    })

    socket.emit('sendUserInfo', {
      userinfo: user,
      userlist: numUsers,
    })
  })

  socket.on('logout', user => {
    numUsers.forEach((item, idx) => {
      if (item.username === user.username) {
        numUsers.splice(idx, 1)
      }
    })

    socket.emit('sendUserInfo', {
      userinfo: user,
      userlist: numUsers,
    })
  })
})

function login(socket, user) {
  user.userid = socket.id
  numUsers.forEach((item, idx) => {
    if (item.username === user.username) {
      numUsers.splice(idx, 1)
    }
  })
  numUsers.push(user)
}
