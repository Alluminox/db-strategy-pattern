### Connect to database

```javascript
const DatabaseContext = require('./context')

const options = {
    dialect: 'mongodb',
    dbname: 'replicsdb',
    // hosts: ['127.0.0.1:27018', '127.0.0.1:27019', '127.0.0.1:27020'],
    hosts: ['127.0.0.1:27017'],
    auth: {},
  
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // replicaSet : 'rs0' 
        
    }
}

DatabaseContext
.connect('mongoose', )
.then(console.log)
```
