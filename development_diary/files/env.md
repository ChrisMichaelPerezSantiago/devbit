

## *MongoDB `{EnvironmentConfiguration}`*

*Create the **`.env`** file in the root of the project, and add the following configuration.*

```javascript
PORT=          
MONGO_HOST=    
MONGO_USER=    
MONGO_PASS=    
MONGO_DBNAME=
TOKEN_SECRET=
```

## *`@type {EnvironmentConfiguration}`*
```javascript
const config = {
  ...process.env
};

```

*For more information about the configuration verify [config.js](../src/config.js)*