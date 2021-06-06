var express = require('express');
var router = express.Router();
const back_user = require('../models/back_user')

/* GET home page. */
router.get('/getBackUser', function(req, res, next) {
    res.send('接口调试成功');
    // back_user.find({},function(res, doc){
    //     console.log();
    // })
});

module.exports = router;