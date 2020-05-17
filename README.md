## Node TypeScript Boilerplate

The boilerplate to rapidly create node js service based on TypeScript.

The boilerplate has bare minium dependencies and development  dependencies all what is needed for initial configuration.

### Initial setup 

### Clone repository 

You can download a zip from project repository page.

OR

Clone repository with help of `git` 
```
git clone https://github.com/mze-runner/node-ts-boilerplate.git .
```

### Install dependencies 

```
npm install
```

### Run project

Run in development mode

```
npm run dev
```

Run in production mode 
```
npm start
```

## ESLint

The boilerplate already has pre-configured eslint. 
I did few tweaks to suite my own coding style. Feel free to enforce your own rules.

What you can to to **fully reset** eslint configuration.

Run init and set up your preferences from the scratch.
```
npx eslint --init
npx eslint ./src/*.ts --fix 
```
`eslint ./src/*.ts --fix` applies your changes to entire project housed under ./src folder. 

In case you want to make couple of tweaks, go and change `.eslintrc.json` files and run `npx eslint ./src/*.ts --fix `.

In case your fine with pre-defined rules, then you need to do nothing.

## Dependencies

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
