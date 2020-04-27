class RepositoryError extends Error {
    constructor(msg) {
        super(msg);
        Error.captureStackTrace(this, RepositoryError)
    }
}

module.exports = RepositoryError;