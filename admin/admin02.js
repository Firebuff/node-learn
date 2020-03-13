const express = require('express')

const bodyParser = require('body-parser') // ����body-parser ����post ���󴫵ݹ���������


const md5 = require('md5'); //  �������ģ��


const expressSession = require('express-session')

const MongoStore = require('connect-mongo')(expressSession)


const app = express()

const DB = require('./db/db.js')


app.set('view engine', 'ejs') //����ģ������, ����require ���룬����ֱ������

app.use(expressSession({
    secret: "I am session",
    name: 'session_id',
    resave: false,
    saveUninitialized: true, 
    cookie: {
        maxAge: 1000*60*30 // 30����ʧЧ
    },
    rolling: true,
    store: new MongoStore({
        url: 'mongodb://127.0.0.1:27017/student',
        touchAfter: 60*30 // ��ø���һ�λỰ����λ���룩
    })

}))



// ʹ�� body-parser�������ʹ���� enctype="multipart/form-data"��body-parser���޷�����ģ���ȻҲ�޷���ȡ��post�������
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// ���þ�̬Ŀ¼
app.use(express.static('public'))



app.listen(4000,'127.0.0.1')


/*app.use((req, res, next) => {

    let path = req.path

    let routers = ['/admin','/list', '/add']

    // �ж������·���Ƿ��� ��Ҫ��¼���ܷ��ʵ�·�����鵱��
    let isNeedLogin = routers.some((item) => {
        return path == item
    })

    // �����·����Ҫ��¼���ܷ��ʣ���ȥ�ж��û��Ƿ��Ѿ���¼���Ѿ���¼����У�δ��¼����ת��loginҳ��
    if (isNeedLogin) {
        
        if (req.session.username) {
            next()
        } else {
            res.redirect('/login')
        }
    } else if(path == '/login') {
        if (req.session.username) {
           res.redirect('/admin')
        } else {
           next()
        }
    } else {
        next()
    }

})*/


app.get('/login', (req,res) => {

    res.render('login')

})


app.post('/dologin', (req, res) => {

    /*
        ��¼���裺 

        1. ��ȡ�����������ǰ̨ ���ݹ����� �û��� �� ����

        2. �Ѵ��ݹ����� �û��������� ��ѯ���ݿ⣬ �������ݿ��з��������û�

        3. ��¼�ɹ��� session ��⣬д�� cookie����Ϊ����ҳ�������ͨ��ƾ֤����ת���û�����ʵ�ҳ��


     */
    

    let username = req.body.username;

    let password = req.body.password

    let where = {
        username: username,
        password: md5(password) // ������ܣ� ��Ϊ�û�ע��ʱ���û��������Ǽ��ܺ��ٱ��������ݿ��е�
    }

    // ���� ��ѯ ���ݿ�
  /*  MongoClient.connect(dataBaseUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {

        if (err) {
            console.log(err)
            res.send('���ݿ�����ʧ��')
            return
        }

        let db = client.db('user') //ѡ���ĸ����ݿ�


        db.collection('userinfo').find(where).toArray( (err, result) => {
            if (err) {
                console.log(err)
                res.send('���ݿ��ѯʧ��')
                return
            }
            
            if (result.length) {
                req.session.username = 'robert'

                app.locals['username'] = req.session.username

                let tips = `<script>
                    alert('login success')
                    window.location.href='/admin';
                </script>`

                res.send(tips)
               
            } else {
                let tips = `<script>
                    alert('login fails')
                    window.location.href='/login';
                </script>`
                res.send(tips)
            }

        })

    })*/

})

app.get('/admin', (req, res) => {

    res.render('admin')
})

app.get('/list', (req, res) => {

    res.render('list')

})

app.get('/add', (req, res) => {

    DB.find('userinfo', {}, 'user', function (err, res) {
        if (err) {
            console.log(err)
            return
        }

        console.log(res)
    })
})

