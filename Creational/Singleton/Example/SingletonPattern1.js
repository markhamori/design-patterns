// Creating a single object that is shared amongst a
// bunch of different resources throughtout our app
// without having to recreate that object or losing
// the information inside of it

class FancyLogger {
  constructor() {
    if (FancyLogger.instance == null) {
      this.logs = [];
      FancyLogger.instance = this;
    }
    return FancyLogger.instance;
  }

  log(message) {
    this.logs.push(message);
    console.log(`FANCY: ${message}`);
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`);
  }
}

const logger = new FancyLogger();
// Prevent this object from being changed in
// any way
Object.freeze(logger);

// We got the log from the only one, same instance
// every time.

// Other file
function logFirstImplementation() {
  logger.printLogCount();
  logger.log("First File");
  logger.printLogCount();
}

// Other file
function logSecondImplementation() {
  logger.printLogCount();
  logger.log("Second File");
  logger.printLogCount();
}
