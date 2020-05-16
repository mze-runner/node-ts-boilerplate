## Node TypeScript Boilerplate

The boilerplate to rapidly create node js service based on TypeScript.

The boilerplate has bare minium dependencies and development  dependencies all what is needed for initial configuration.

### Initial setup 

1. clone repository 

2. Install dependencies 

```
npm i 
```

### Dependencies

By default boilerplate has the following dependencies

```javascript
express
body-parser
mongoose
```

***Dev dependencies***

```javascript
@types/express
@types/mongoose
@typescript-eslint/eslint-plugin
@typescript-eslint/parser
concurrently
eslint
eslint-config-standard
eslint-plugin-import
eslint-plugin-node
eslint-plugin-promise
eslint-plugin-standard
ts-node
typescript
```

### Run project

Run in development mode

```
npm run debug
```

Run in production mode 
```
npm start
```