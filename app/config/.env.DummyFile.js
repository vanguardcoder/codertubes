const env = {
    database: 'dbsystemsvanguard',
    username: 'dbcoder',
    password: 'myW3bP@55Word!',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = env;
