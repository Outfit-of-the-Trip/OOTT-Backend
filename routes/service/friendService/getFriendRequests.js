const promisePool = require("../../../config/db")

exports.getFriendRequests = async (userID) => {
    const q = "SELECT * FROM USER u1, (SELECT f1.fromUsrId as myFriend from FRIENDS f1, FRIENDS f2 WHERE (f1.toUsrId = ? AND f2.fromUsrId = ?) AND (f1.fromUsrId = f2.toUsrId) AND f1.areWeFriend = 1 AND f2.areWeFriend = 1) u2 WHERE u2.myFriend = u1.usrId;";
    const [myFriend, fields] = await promisePool.query(q, [userID, userID]);
    return myFriend;
}