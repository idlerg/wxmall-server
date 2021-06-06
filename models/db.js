const mongoose = require('mongoose')
const DB_URL = 'mongodb://127.0.0.1:27017/wxmall'

mongoose.connect(DB_URL,{ useUnifiedTopology: true })

const db = mongoose.connection;

// open or disconnected
db.on('open',function(){
    console.log('数据库连接成功...');
})

db.on('error', function(){
    console.log('数据库连接异常...');
})

db.on('disconnected', function(){
    console.log('数据库断开...');
})

module.exports = mongoose