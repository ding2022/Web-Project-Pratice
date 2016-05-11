/**
 * Created by pengguangyu on 2016/4/28.
 */
// CRUD SQL语句
var user = {
    insert:'INSERT INTO users(id, username, password) VALUES(0,?,?)',
    update:'update users set username=?, password=? where id=?',
    delete: 'delete from users where id=?',
    queryById: 'select * from users where id=?',
    queryAll: 'select * from users'
};

module.exports = user;