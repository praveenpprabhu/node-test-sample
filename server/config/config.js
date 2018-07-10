var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {

    process.env['JWT_SECRET'] = 'abc123';
    process.env['MONGODB_URI'] = "mongodb://localhost:27017/LibraryApp";
    process.env['PORT'] = '3000';

}