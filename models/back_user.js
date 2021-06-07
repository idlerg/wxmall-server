const mongoose = require("./db");
const Scheam = mongoose.Schema;

// 设计用户表集合
// 字段及数据类型
const back_user = new Scheam({
    real_name: String,
    nack_name: String,
    login_time: {
        type: Date,
        default: Date.now
    },
    last_login: Date,
    login_phone: String,
    password: String,
    wx_name: String,
    isAdmin: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('userInfo',back_user,'userInfo')