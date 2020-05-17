import winston, { createLogger, format, transports } from 'winston';

const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

const loggerOptions = {
    file: {
        level: 'debug',
        filename: `./logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false
    },
    console: {
        level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
        handleExceptions: true,
        json: false,
        colorize: true
    }
};

const options: winston.LoggerOptions = {
    format: combine(
        label({ label: '' }),
        timestamp(),
        myFormat
    ),
    transports: [
        new transports.Console(loggerOptions.console),
        new transports.File(loggerOptions.file)
    ]
};

const logger = createLogger(options);

if (process.env.NODE_ENV !== 'production') {
    logger.debug('Logging initialized at debug level');
}

export default logger;
