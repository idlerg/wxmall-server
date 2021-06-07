const mongoose = require("./db");
const Scheam = mongoose.Schema;

// 设计用户表集合
// 字段及数据类型
// userInfo
const back_user = new Scheam({
    name: String,
    age: Number,
    gender: String
})

module.exports = mongoose.model('test',back_user,'test')