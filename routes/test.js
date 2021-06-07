const express = require('express')
var router = express.Router()

const test = require('../models/test')

// 获取数据
router.get('/getData', function(req, res, next) {
    test.find({},function(err, docs) {
        if(err) {
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
})

// 提交数据
router.post('/setData', function(req, res, next){
    const params = req.body
    test.insertMany(params,function(err, docs) {
        if(err) {
            res.json({
                code: 10001,
                msg: msg.message
            })
        } else {
            res.json({
                code: 0,
                data: {}
            })
        }
    })
})

module.exports = router