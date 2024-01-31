const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
// bodyparser 사용 설정
// app.use(bodyParser.json()); // JSON 형태의 body를 파싱할 수 있도록 설정
// app.use(bodyParser.urlencoded({ extended: true }));
// -- gpt에서 알려준 코드
// body-parser 미들웨어를 사용하여 허용되는 페이로드 크기 설정
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
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
// 홈페이지 아이템 목록 조회
// 아이템 목록 코드
app.get('/home/itemList', async function (req, res) {
    try {
        console.log('itemType processing start');

        const result = await db.collection('items').find({}).toArray();
        res.status(200).json(result);
    } catch (error) {
        console.error('Error getting itemType data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// 아이디 확인 용
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
// 사용자 회원가입 코드
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
            profileImgURL: req.body.profileImgURL,
            profileImgName: req.body.prifileImgName,
            itemIdList: req.body.itemIdList,
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
// 사용자 로그인 코드
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
// 사용자 비밀번호 코드
app.get('/getUserPassword', async function (req, res) {
    try {
        console.log('getUserPassword processing start');
        console.log('userPassword : ' + req.query.userId);
        db.collection('users').findOne({ userId: req.query.userId }, function (error, result) {
            console.log(result.userPassword);
            res.send({ result: result.userPassword });
        })
    }
    catch (error) {
        console.error('Error processing signUp request:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// 아이템 목록 코드
app.get('/itemType', async function (req, res) {
    try {
        console.log('itemType processing start');

        const result = await db.collection('itemType').find({}).toArray();
        res.status(200).json(result);
    } catch (error) {
        console.error('Error getting itemType data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// 사용자 측 나눔 물건 등록 코드
app.post('/users/registerItem', async function (req, res) {
    // console.log(req.body);
    console.log('/users/registerItem start.');
    try {
        console.log('registerItem processing start');
        // 여기에서 실제로 데이터베이스에 데이터를 추가하는 등의 작업 수행 가능
        db.collection('items').insertOne({
            // 저장할 데이터 정리
            imageList: req.body.imageList,
            itemName: req.body.itemName,
            title: req.body.title,
            content: req.body.content,
            locate: req.body.locate,
            itemTypeList: req.body.itemTypeList,
            userId: req.body.userId,
            phoneNumber: req.body.phoneNumber,
            isShared: req.body.isShared,
            likedUserId: req.body.likedUserId,
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
        console.error('Error processing resister item request:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// 사용자 측 등록한 물건 목록 조회
app.get('/users/itemList/:userId', async function (req, res) {
    try {
        console.log('users/itemList processing start');
        const userId = req.params.userId;
        const result = await db.collection('items').find({ userId }).toArray();
        res.status(200).json(result);
    } catch (error) {
        console.error('Error getting itemType data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// 물건 상세 조회
app.get('/itemDetail/:itemId', async function (req, res) {
    console.log('itemDetail fetching start');
    const itemId = req.params.itemId;
    try {
        console.log('itemDetail processing start');
        db.collection('items').findOne({ _id: new ObjectId(itemId) }, function (error, result) {
            console.log(result)
            res.send({ result: result })
        })
        console.log('itemDetail processing end');
    }
    catch (error) {
        console.error('Error processing signUp request:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
    console.log('itemDetail fetching end');
});
// 회원 프로필 정보 수정
app.post('/users/:userId/updateProfile', async function (req, res) {
    try {
        console.log('Received a updateProfile request from the front end.');
        const userId = req.params.userId;
        console.log(userId);
        const data = {
            profileImgName: req.body.profileImgName,
            profileImgURL: req.body.profileImgURL,
            userName: req.body.userName,
            phoneNumber: req.body.phoneNumber,
        };
        // 여기에서 데이터베이스 업데이트 로직을 추가
        const result = await db.collection('users').updateOne(
            { _id: new ObjectId(userId) },
            { $set: data }
        );
        // 회원 정보 수정을 위한 재 조회 및 전달
        if (result.modifiedCount === 1) {
            console.log('User profile updated successfully.');
            // 업데이트 후 해당 사용자 정보를 다시 조회
            const user = await db.collection('users').findOne({ _id: new ObjectId(userId) });
            const updatedUser = {
                _id: user._id,
                userId: user.userId,
                userName: user.userName,
                birthday: user.birthday,
                phoneNumber: user.phoneNumber,
                profileImgURL: user.profileImgURL,
                profileImgName: user.profileImgName,
            }

            // 업데이트된 사용자 정보를 클라이언트에게 반환
            res.status(200).json({ message: 'Success', updatedUser });
        } else {
            console.error('User profile not updated.');
            res.status(500).json({ message: 'Failed to update user profile' });
        }
    }
    catch (error) {
        console.error('Error processing updateProfile request:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// 회원 로그인 정보 수정
app.post('/users/:userId/updateLoginfo', async function (req, res) {
    try {
        console.log('Received a updateProfile request from the front end.');
        const userId = req.params.userId;
        console.log(userId);
        const data = {
            userId: req.body.userId,
            userPassword: req.body.userPassword,
        };
        // 여기에서 데이터베이스 업데이트 로직을 추가
        const result = await db.collection('users').updateOne(
            { _id: new ObjectId(userId) },
            { $set: data }
        );
        // 업데이트된 정보 확인 및 로깅
        console.log('Matched ' + result.matchedCount + ' document(s) and modified ' + result.modifiedCount + ' document(s)');
        // 클라이언트에게 업데이트된 정보 반환
        res.json({ message: 'Profile updated successfully', result });
        // 회원 정보 수정을 위한 재 조회 및 전달
        // if (result.modifiedCount === 1) {
        //     console.log('User profile updated successfully.');
        //     // 업데이트 후 해당 사용자 정보를 다시 조회
        //     const user = await db.collection('users').findOne({ _id: new ObjectId(userId) });
        //     const updatedUser = {
        //         _id: user._id,
        //         userId: user.userId,
        //         userName: user.userName,
        //         birthday: user.birthday,
        //         phoneNumber: user.phoneNumber,
        //         profileImgURL: user.profileImgURL,
        //         profileImgName: user.profileImgName,
        //     }
        //     // 업데이트된 사용자 정보를 클라이언트에게 반환
        //     res.status(200).json({ message: 'Success', updatedUser });
        // } else {
        //     console.error('User profile not updated.');
        //     res.status(500).json({ message: 'Failed to update user profile' });
        // }
    }
    catch (error) {
        console.error('Error processing updateProfile request:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
app.delete('/deleteItem/:itemId', async function (req, res) {
    try {
        console.log('delete item fetch start');
        // 전달한 파라미터 저장
        const itemId = req.params.itemId;
        // 파라미터 확인
        console.log(itemId);
        // db와 통신하여 해당 item의 id를 갖는 data 삭제하기
        // collection : items, deleteOne
        const result = await db.collection('items').deleteOne({ _id: new ObjectId(itemId) });
        if (result.deletedCount === 1) {
            console.log('Item deleted successfully.');
            res.status(200).json({ message: 'Success' });
        } else {
            console.error('Failed to delete item.');
            res.status(500).json({ message: 'Failed to delete item' });
        }
    }
    catch (error) {
        console.error('Error processing updateProfile request:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
    finally {
        console.log('delete item fetch end');
    }
});
// 회원 좋아요 정보 수정
app.post('/users/:userId/toggleLiked', async function (req, res) {
    try {
        console.log('Received a toggleLike request from the front end.');
        const userId = req.params.userId;
        console.log(userId);
        const data = {
            itemIdList: req.body.itemIdList,
        };
        // 여기에서 데이터베이스 업데이트 로직을 추가
        const result = await db.collection('users').updateOne(
            { _id: new ObjectId(userId) },
            { $set: data }
        );
        // 업데이트된 정보 확인 및 로깅
        console.log('Matched ' + result.matchedCount + ' document(s) and modified ' + result.modifiedCount + ' document(s)');
        // 회원 정보 수정을 위한 재 조회 및 전달
        if (result.modifiedCount === 1) {
            console.log('User profile updated successfully.');
            // 업데이트 후 해당 사용자 정보를 다시 조회
            const user = await db.collection('users').findOne({ _id: new ObjectId(userId) });
            const updatedUser = {
                _id: user._id,
                userId: user.userId,
                userName: user.userName,
                birthday: user.birthday,
                phoneNumber: user.phoneNumber,
                profileImgURL: user.profileImgURL,
                profileImgName: user.profileImgName,
                itemIdList: user.itemIdList,
            }
            // 업데이트된 사용자 정보를 클라이언트에게 반환
            res.status(200).json({ message: 'Success', updatedUser });
        } else {
            console.error('User profile not updated.');
            res.status(500).json({ message: 'Failed to update user profile' });
        }
    }
    catch (error) {
        console.error('Error processing updateProfile request:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});