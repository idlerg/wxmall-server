// 分装公共的sql语句
const sql = {
    // 数据库集合靠函数去传递
    // 插入
    insert(CollectionName, insertData) {
        // 数据库的操作属于异步操作，后续的业务逻辑会交给执行的那个单位
        // A 调用了B B包含异步操作,操作完毕 A继续执行业务逻辑
        // 异步操作  --- 回调函数 / promise / generator + yeild / async + await
        // User.insertMany(insertData, (err) => {
        //   if (err) throw err;
        //   console.log('插入成功')
        // })
        // promise的写法
        // return new Promise((resolve, reject) => {
        // })
        return new Promise((resolve, reject) => {
            CollectionName.insertMany(insertData, (err) => {
                console.log('insertData', insertData)
                if (err) throw err;
                resolve()
            })
        })
    },
    // 删除
    delete(CollectionName, deleteData, deleteType) {
        // User.deleteOne(deleteData, (err) => {})
        // User.deleteMany(deleteData, (err) => {})

        // style.display = "none"   <===>  style['display'] = "none"
        // style.animation = "test" 兼容性 
        // 对象后的属性不可以是变量，如果有变量，写成 对象[属性] 形式

        deleteType = deleteType || 'deleteOne' // 默认为删除单条数据

        return new Promise((resolve, reject) => {
            CollectionName[deleteType](deleteData, (err) => {
                if (err) throw err;
                resolve()
            })
        })
    },
    // 更新
    update(CollectionName, whereObj, updateObj, updateType) {
        updateType = updateType || 'updateOne'
        return new Promise((resolve, reject) => {
            CollectionName[updateType](whereObj, updateObj, (err) => {
                if (err) throw err;
                resolve()
            })
        })
    },
    // 查询
    find(CollectionName, whereObj, showObj) {
        return new Promise((resolve, reject) => {
            CollectionName.find(whereObj, showObj).exec((err, data) => {
                if (err) throw err;
                resolve(data)
            })
        })
    },
    // 分页
    paging(CollectionName, whereObj, showObj, limitNum, pageCode) {
        return new Promise((resolve, reject) => {
            // limit(limitNum) 每页显示个数
            // skip(limitNum * pageCode) // 每页从哪一个开始
            CollectionName.find(whereObj, showObj).limit(limitNum).skip(limitNum * pageCode).exec((err, data) => {
                if (err) throw err;
                resolve(data)
            })
        })
    },
    // 
    distinct(CollectionName, name) {
        return new Promise((resolve, reject) => {
            CollectionName.distinct(name).exec((err, data) => {
                if (err) throw err;
                resolve(data)
            })
        })
    }
}

module.exports = sql