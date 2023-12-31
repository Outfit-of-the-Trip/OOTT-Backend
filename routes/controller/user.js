const express = require('express');
const router = express.Router();
const getUserInfo = require('../service/userService/getUserInfo')
const setUserInfo = require('../service/userService/setUserInfo')
const updateUserInfo = require('../service/userService/updateUserInfo')

router.get('/getUserInfo', async (req, res, next) => {
    return res.json(await getUserInfo.getUserInfo(req.query.userId));
});

router.post('/setUserInfo', async (req, res, next) => {
    return res.json(await setUserInfo.setUserInfo(req.body));
});

router.post('/updateUserInfo', async (req, res, next) => {
    return res.json(await updateUserInfo.updateUserInfo(req.body));
});

module.exports = router;