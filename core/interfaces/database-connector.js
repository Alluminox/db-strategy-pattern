const DatabaseError = require('../errors/database-error');
/*
Implemnt connector strategy
*/
class DatabaseConnector {
    connect() {
        throw new DatabaseError("Implement connect method into subclass")
    }

    disconnect() {
        throw new DatabaseError("Implement disconnect method into subclass")
    }

    importModels() {
        throw new DatabaseError("Implement import-models method into subclass")
    }

    setConnection(conn) {
        if (conn && !this.connection) {
            this.connection = conn;
        }
    }

}

module.exports = DatabaseConnector;