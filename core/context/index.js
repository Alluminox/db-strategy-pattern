const DatabaseConnectorFactory = require('../factory/database-connector-factory')

const { STRATEGIES_LIST } = require('../config');

class DatabaseConnectorContext {
    constructor() {
        this._supportStrategies = STRATEGIES_LIST;
    }

    findStrategy(type) {
        const idx = this._supportStrategies.findIndex(i => i.strategy.toLocaleLowerCase() === type.toLocaleLowerCase() )
        if (idx === -1) return null;
        return this._supportStrategies[idx].connector;
    }

    connect(type, connectionOptions) {
        const Strategy = this.findStrategy(type)

        if (!Strategy) {
            throw new Error("Invalid type to connect", type);
        }

        return new DatabaseConnectorFactory(
            new Strategy(),
            connectionOptions
        );
    }

    setSupportStrategy({ strategy, connector }) {
        this._supportStrategies.push({strategy, connector });
    }
}

module.exports = new DatabaseConnectorContext();