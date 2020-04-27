const RepositoryError = require('../errors/repository-error');

/*
Repository
*/
class Repository {
    constructor(conn) {
        return this.resolve(conn);
    }

    resolve(conn) {
        return new Promise((r, j) => {
            if (!conn) throw new RepositoryError("Invalid connection to repository")
            r(this)
        });
    }
}

module.exports = Repository;