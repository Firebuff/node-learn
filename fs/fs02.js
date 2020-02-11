
const fs = require('fs');

/* 
    应用： 服务器保存图片到文件夹中时（如 upload 文件夹），

    要判断当前目录是否存在改文件目录，不在则创建
*/

/* 
fs.stat('upload', (err,stats) => {
    if (err) {
        // 如果文件不存在会报错，走到这里
        // console.log(err)
        
        fs.mkdir('upload', (err) => {
            if(err) {
                console.log(err)
                return
            }

            console.log('upload目录创建成功！')
        })

    } else {
        // console.log(stats.isDirectory());

        if (stats.isDirectory()) {
            console.log('upload 目录已存在！')
        }
    }
}) */


/* 
    应用：找出目录下的所有子目录，然后打印出来
*/
let dirArr = []
fs.readdir('more', (err,files) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(files)

    let proArr = []

    // 遍历
    for (let i = 0; i < files.length; i ++) {
        // console.log(files[i])
        
        let newPro = new Promise( (resolve,reject) => {
                // 如果是目录就将该目录添加到数组中
            fs.stat('more/' + files[i], (error, stats) => { // 是异步动作

                if (error) {
                    console.log(err)
                    reject()
                    return
                }
                // console.log(stats.isDirectory())
                if (stats.isDirectory()) {
                    dirArr.push(files[i])
                }
                resolve()

            })
        })
        proArr.push(newPro)
    }
    Promise.all(proArr).then( () => {
        console.log(dirArr)
    })
    
})