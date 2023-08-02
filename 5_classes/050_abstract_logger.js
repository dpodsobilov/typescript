class Logger {
    printDate(date) {
        this.log(date.toString());
    }
}
class CLogger extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.printDate(new Date());
        this.log(message);
    }
}
const logger = new CLogger();
logger.logWithDate('hi');
