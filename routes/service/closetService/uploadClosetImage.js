const promisePool = require("../../../config/db")
const path = require("path");
const axios = require('axios');

exports.uploadClosetImage = async (data) => {
    console.log('test')

    axios.post("http://35.188.152.122:5543/predict/camera",{base64_image: data.img})
    .then( async res => {
        const param = [data.usrId, data.clothesId, 'data:image/png;base64,'+data.img, res.data.label, res.data.color]
        try{
            const q = 'INSERT INTO CLOSET (usrId, clothesId, clothesImg, clothesTag, clothesColor) values (?, ?, ?, ?, ?)';
            await promisePool.query(q, param);
            return {"success": true}
        }catch{
            return {"success": false}
        }
    })


}