const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
// bodyparser 사용 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // JSON 형태의 body를 파싱할 수 있도록 설정
// ejs 사용 설정
app.set('view engine', 'ejs');
require('dotenv').config();
const { ObjectId } = require('mongodb');


const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb+srv://admin:qwer1234@cluster0.qme18ml.mongodb.net/?retryWrites=true&w=majority',
    function (error, client) {
        if (error) return console.log(error)
        db = client.db('nanum');
        // 최초 db 연결 확인 콘솔
        console.log('--------@@@--------')
        console.log('success to connecting DB');

        // mongodb connect 시 서버 연결 원할 경우
        app.listen(8080, function () {
            console.log('listening on 8080')
        })

        app.get('/test', (req, res) => {
            res.send('test success')
        });

    })

app.get('/checkId/:imsiId', async function (req, res) {
    try {
        console.log('Received a checkId request from the front end.');
        db.collection('users').findOne({ userId: req.params.imsiId }, function (error, result) {
            console.log(result)
            res.send({ result: result })
        })
    }
    catch (error) {
        console.error('Error processing signUp request:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

app.post('/signUp', async function (req, res) {
    try {
        console.log('Received a signUp request from the front end.');
        // 여기에서 실제로 데이터베이스에 데이터를 추가하는 등의 작업 수행 가능
        db.collection('users').insertOne({
            userId: req.body.userId,
            userPassword: req.body.userPassword,
            userName: req.body.userName,
            birthday: req.body.birthday,
            phoneNumber: req.body.phoneNumber,
            profileImg: req.body.profileImg
        }, function (error, result) {
            res.redirect('/test')
        }, function (error, result) {
            if (error) {
                console.error('Error inserting data into the database:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
            else {
                console.log('Data inserted successfully.');
                res.status(200).json({ message: 'Success' });
            }
        })
    } catch (error) {
        console.error('Error processing signUp request:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }

});

app.get('/login', async function (req, res) {
    try {
        console.log('Login processing start');
        console.log('userId : ' + req.query.userId);
        console.log('userPassword : ' + req.query.userPassword);
        db.collection('users').findOne({ userId: req.query.userId, userPassword: req.query.userPassword }, function (error, result) {
            console.log(result)
            res.send({ result: result })
        })
    }
    catch (error) {
        console.error('Error processing signUp request:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});