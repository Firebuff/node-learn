

const fs = require('fs') // 引入文件模块


// fs.stat 是检测是文件还是 文件夹(目录)

/* 
fs.stat('test.txt',(err,stats) => {
    if (err) {
        console.log(err)
        return;
    }

    console.log(stats)

    console.log(`文件 =>  ${stats.isFile()}`);

    console.log(`目录 => ${stats.isDirectory()}`)

} ) */


// fs,mkdir 创建目录

/* fs.mkdir('logs',(err) => { // 如果要创建的目录已经存在会报错，所以创建前要先去判断目录是否已经存在
    if (err) {
        console.log(err);
        return;
    }

    console.log('创建目录成功！')
}) */


// fs.writeFile 写入文件，如果要写入的文件不存在，会先创建，再去写入; 写入时，会先删除文件原有内容再写入。也就是会覆盖原有内容

/* fs.writeFile('test.txt','上班啦', (err) => {
    if (err) {
        console.log(err)
        return
    }

    console.log('写入成功！')
}) */


/*  fs.appendFile 追加写入文件。也就是不修改文件的原有内容，追加写入文件（也就是不覆盖写入）; 
    同样，如果要写入的文件不存在，会先创建，再去写入
 */

/* fs.appendFile('append.txt', '我是追加的内容哦\n', (err) => {

    if (err) {
        console.log(err);
        return;
    }
    console.log('追加成功！')
}) */





// fs.readFile 读取文件

/* fs.readFile('test.txt', 'utf8', (err,data) => {
    if (err) {
        console.log(err)
        returns
    }

    // console.log(data.toString()) // 如果没有指定 encoding，则返回原始的 buffer,可以通过toString转成字符串

    console.log(data)
}) */





// fs.readdir 读取目录， 会把目录下的文件和文件夹都以一个数组返回来
/* 
fs.readdir('./loggie', (err,files) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log(files)
}) */




// fs.rename  1.重命名, 可以修改文件的类型 2. 可以剪切文件

/* fs.rename('rename','renames', (err) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log('命名成功！')
}) */

// 把文件移动并且 命名

/* fs.rename('rename/name.txt','remove/hell.txt', (err) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log('命名成功！')
})  */




/* fs.rmdir 删除目录(必须是空目录), 不能删除文件， 如果目录下还有其他文件会报错，也就是 要删除的目录必须是一个空目录，

要删除的目录不存在也会报错 
*/

/* 
fs.rmdir('delete', (err) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log('删除成功！')
})
 */






// fs.unlink 删除文件, 如果文件不存在会报错


/* fs.unlink('delete.js', (err) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log('删除成功！')
})
 */

