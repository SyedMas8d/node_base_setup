const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    format: format.combine(format.timestamp(), format.json()),
    transports: [
        new transports.Console()
    ]
});

logger.stream = {
    write(message, encoding) {
        logger.info(message);
    },
};

module.exports = logger;