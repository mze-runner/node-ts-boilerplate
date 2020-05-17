## Node TypeScript Boilerplate

The boilerplate to rapidly create node js service based on TypeScript.

The boilerplate has bare minium dependencies but equipped with all you needed for initial configuration, e.g. ready-to-use run scripts, logging, setup to cope with environment variables.

## Context

- [Initial setup](#inital-setup)
- [Logging](#logging)
- [Environment variables](#environment-variables)

## Initial setup 

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

Scripts behind the scene run `build` and produce code to `./build` folder.

## Logging 

The Boilerplate leverage `winston` to provide logging capabilities. 
Logs are being written to consol and `logs/app.log` file.

Additionally, default output string format is customized per below 

```
2020-05-17T08:27:03.340Z [info]: Express server listening on port 7000, environment: development
```

## Environment variables 

Following [The twelve-factor app](https://12factor.net/) environment variables, e.g. port, hosts, logins, password, etc. MUST not be stored as a constants in code.

The boilerplate utilize `dotenv` module and consume environment variable from `.env` file.

Feel free to update it whatever you need.

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

In case you want to make couple of tweaks, go and change `.eslintrc.json` file and run `npx eslint ./src/*.ts --fix `.

In case your fine with pre-defined rules, then you need to do nothing.
