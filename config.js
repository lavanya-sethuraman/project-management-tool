exports.DATABASE_URL = process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    'mongodb://localhost/pro5';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL ||
    global.DATABASE_URL ||
    'mongodb://localhost/pro5-test';
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '1d';