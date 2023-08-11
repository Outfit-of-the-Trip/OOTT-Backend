const express = require('express');
const router = express.Router();
const getUserInfo = require('../service/userService/getUserInfo')
const setUserInfo = require('../service/userService/setUserInfo')
const updateUserInfo = require('../service/userService/updateUserInfo')

router.get('/user.info', async (req, res, next) => {
    return res.send(JSON.stringify(await getUserInfo.getUserInfo(req.query.userID)));
});

router.post('/user.info', async (req, res, next) => {
    return res.send(JSON.stringify(await setUserInfo.setUserInfo(req.body)));
});

router.put('/user.info', async (req, res, next) => {
    return res.send(JSON.stringify(await updateUserInfo.updateUserInfo(req.body)));
});

module.exports = router;