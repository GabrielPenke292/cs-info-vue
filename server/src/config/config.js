module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'tabtracker',
        username: process.env.DB_USER || 'tabtracker',
        password: process.env.DB_PASS || 'tabtracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: path.resolve(__dirname, '../../tabtracker.sqlite')
        }
            
    }
}
