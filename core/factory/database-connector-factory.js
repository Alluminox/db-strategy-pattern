const StrategyError = require('../errors/strategy-error');
const Factory = require('../interfaces/factory')

class DatabaseConnectorFactory  extends Factory {

    constructor(strategy, config = {}) {
        super();

        if (!strategy || !('connect' in strategy)) {
            throw new StrategyError("Non strategy available!")
        }

        return this.factory(strategy, config)
    }

    async factory(strategy, config) {
        try {
            return await strategy.connect(config)
        } catch(err) {
            throw err
        }
    }
}

module.exports = DatabaseConnectorFactory