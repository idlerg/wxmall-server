var express = require('express');
var router = express.Router();
const back_user = require('../models/back_user')

/* 获取数据 */
router.get('/getBackUser', function(req, res, next) {
    // res.send('接口调试成功');
    back_user.find({},function(err, docs){
        if(err){
            console.log(err.message)        
            res.json({
                code: 100001,
                msg: err.message
            })
        } else {
            res.json({
                code: 0,
                msg: '',
                data: docs
            })
        }
    })
});

// 提交数据
router.get('/getBackUser2', function(req, res, next) {
    // res.send('接口调试成功');
    back_user.find({},function(err, docs){
        if(err){
            console.log(err.message)        
            res.json({
                code: 100001,
                msg: err.message
            })
        } else {
            res.json({
                code: 0,
                msg: '',
                data: docs
            })
        }
    })
});

module.exports = router;