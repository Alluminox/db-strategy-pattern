const MongooseDatabaseConnector = require('../strategies/mongoose-database-connector')

module.exports = {
    STRATEGIES_LIST: [
        {
            strategy: 'mongoose',
            connector: MongooseDatabaseConnector 
        }
    ]   
}