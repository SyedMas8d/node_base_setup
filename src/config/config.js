require('dotenv').config();

module.exports = {
    APP_NAME: process.env.APP_NAME || "Billings",
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        dialect: 'mysql',
        define: {
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        },
        pool: {
            max: 100,
            min: 0,
            idle: 10000,
            acquire: 10000,
        },
        logging: false,
        seederStorage: 'sequelize',
    },
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        dialect: 'mysql',
        define: {
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        },
        pool: {
            max: 100,
            min: 0,
            idle: 10000,
            acquire: 10000,
        },
        logging: false,
        seederStorage: 'sequelize',
    },
    test: {
        username: 'root',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
    PORT: process.env.PORT || 3000,

    BCRYPT_SALT: process.env.BYCRYPT_SALT || 10,

    SMTP: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        userName: process.env.SMTP_USERNAME,
        password: process.env.SMTP_PASSWORD,
        from: process.env.SMTP_FROM
    },

    OTP_EXPIRY: 5, //5 mins
    JWT_SECRET: process.env.JWT_SECRET || 'Mmasood@7409',
    JWT_EXPIRY: process.env.JWT_EXPIRY || '7d',
    JWT_TOKEN_SOURCE: 'auth-token'
}