// 定时任务
var schedule = require('node-schedule');

exports = module.exports = {
    startSocket(server) {
        // 添加socket.io
        var io = require('socket.io')(server);
        const users = [];
        const msg = [{
            author: 'tony',
            time: '2010-8-7',
            content: 'hello'
        },{
            author: 'tim',
            time: '2010-8-7',
            content: 'hello'
        }]

        io.on('connection', function(socket) {
            // 每分钟的第30秒触发： '30 * * * * *'
            // 每小时的1分30秒触发 ：'30 1 * * * *'
            // 每天的凌晨1点1分30秒触发 ：'30 1 1 * * *'
            // 每月的1日1点1分30秒触发 ：'30 1 1 1 * *'
            // 2016年的1月1日1点1分30秒触发 ：'30 1 1 1 2016 *'
            // 每周1的1点1分30秒触发 ：'30 1 1 * * 1'
            // schedule.scheduleJob('0 * * * * *', function() {
            //     socket.emit('news', { hello: new Date() });
            // });

            socket.on('other event', function(data) {
                socket.emit('msg', 'form server '+new Date());
            });

            socket.on('login',function(username){
                users.push(username);
                socket.emit('login-success', username)
                io.emit('msg-init', msg)
            })

            socket.on('send-msg',function(data){
                console.log(new Date())
                msg.push(data)
                io.emit('msg-init', msg)
            })
        });
    }
};
