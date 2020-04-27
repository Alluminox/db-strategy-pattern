class StrategyError extends Error {
    constructor(msg) {
        super(msg);
        Error.captureStackTrace(this, RepositoryError)
    }
}

module.exports = StrategyError;