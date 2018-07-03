/**
 * Created by yuanjianxin on 2018/1/5.
 */

const DB = require('grpc-db-service-core').instance.DBModel;
const {STRING, INTEGER}=require('grpc-db-service-core').instance.Sequelize;
module.exports = DB.TEST.define('user', {

    id: {
        type: INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    phone: STRING(100),
    password: STRING(255),
    createTime: INTEGER(20)
}, {
    paranoid: false,
    tableName: 'user',
    createdAt: false,
    updatedAt: false,
    deletedAt: false
});
