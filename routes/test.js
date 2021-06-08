const express = require('express')
var router = express.Router()
const test = require('../models/test')

// 获取全部数据 √
router.get('/getData', function(req, res, next) {
    test.find({},function(err, docs) {
        if(err) {
            res.json({
                code: 10001,
                msg: err.message
            })
        } else {
            res.json({
                code: 0,
                data: docs
            })
        }
    })
})

// 按条件查询数据 √
router.post('/getCondData', function(req, res, next) {
    const params = req.body
    test.find(params,function(err, docs) {
        if(err) {
            res.json({
                code: 10001,
                msg: err.message
            })
        } else {
            res.json({
                code: 0,
                data: docs
            })
        }
    })
})

// 提交数据 √
router.post('/setData', function(req, res, next){
    const params = req.body
    test.insertMany(params,function(err, docs) {
        if(err) {
            res.json({
                code: 10001,
                msg: err.message
            })
        } else {
            res.json({
                code: 0,
                data: true
            })
        }
    })
})

// 修改数据
router.post('/modifData', function (req, res, next){
    const params = req.body
    test.updateOne({name: params.name}, {name: params.newName}, function (err, docs) {
        if(err) {
            res.json({
                code: 10001,
                data: err.message
            })
        } else {
            res.json({
                code: 0,
                data: {}
            })
        }
    })
})

// 删除数据
router.post('/deleteData', function (req, res, next){
    const params = req.body
    test.deleteOne(params, function (err, docs) {
        if(err) {
            res.json({
                code: 10001,
                data: err.message
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