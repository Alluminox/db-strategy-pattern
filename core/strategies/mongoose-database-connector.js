const mongoose = require('mongoose');
const DatabaseConnector = require('../interfaces/database-connector');
const StrategyError = require('../errors/strategy-error');

class MongooseDatabaseConnector extends DatabaseConnector {

    makeUrl(config) {
        const { dialect, hosts, dbname, auth } = config;
        const { username, password } = auth; 

        const isAuth = username ? `${username}:${password}@` : '';
        return `${dialect}://${isAuth}${hosts.join(',')}/${dbname}`
    }

    async connect(config) {

        /*
        # Docker network
        docker network create mongo-network

        # Docker replicas
        docker pull tutum/mongodb
        
        ## Gerando chaves criptografadas Open SSL
        sudo openssl rand -base64 756 > mongo-keyfile
        sudo chmod 400 mongo-keyfile
        sudo chown mongodb:mongodb /opt/mongo/

        docker run -d \
            --name=mongodb1 \
            --net=mongo-network \
            -p 27018:27017 \
            mongo mongod --replSet rs0  \

            -v ./certs/mongodb:/opt/mongo // Apenas se quisermos ter a chave

        docker run -d \
            --name=mongodb2 \
            --net=mongo-network \
            -p 27019:27017 \
            mongo mongod --replSet rs0 
        
        docker run -d \
            --name=mongodb3 \
            --net=mongo-network \
            -p 27020:27017 \
            mongo mongod --replSet rs0 --port 30003


        winpty docker exec -it mongodb1 mongo 

        db = (new Mongo('localhost:27017')).getDB('test')

        rs.initiate(
        {
            _id : 'rs0',
            members: [
            { _id : 0, host : "mongodb1:27017" },
            { _id : 1, host : "mongodb2:27017" },
            { _id : 2, host : "mongodb3:27017", arbiterOnly: true }
            ]
        }
        )


        */

        /* Options
        db: {
            native_parser: true
        }
        rplset: {
            name: 'my-mongoreplset',
            auto_reconnect: false,
            poolSize: 10,
            socketOptions: {
                keepAlive: 1000,
                connectTimeoutMS: 30000
            }
        },
        server: {
            poolSize: 5,
            socketOptions: {
                keepAlive: 1000,
                connectTimeoutMS: 30000
            }
        }
        */

        // ReplicSet com mongodb

    
        console.log(this.makeUrl(config))
        const conn = await mongoose.connect(this.makeUrl(config), config.options);
        this.setConnection(conn)
        this.importModels();

        return conn;
    }

    importModels() {
        return [];
    }
}

module.exports = MongooseDatabaseConnector