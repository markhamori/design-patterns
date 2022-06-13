// Basically retry any failed operations in our application
// It can greatly improve the overall stability and resilience

// Don't retry
// Retry immediately
// Retry after delay

async function RetryOperation() {
  let currentTry = 0;
  const maximumTry = 10;

  while (true) {
    try {
      ExternalServiceCall();
      console.log("Succeeded!");
      break;
    } catch (error) {
      currentTry++;
      console.log(`Failed attempt ${currentTry}`);

      if (currentTry >= maximumTry) {
        console.log("Retry maximum reached. Exiting");
        break;
      }
    }
    await sleep(3000);
  }
}

function ExternalServiceCall() {
  console.log("Calling external service...");
  const shouldPass = Math.random() < 0.2;
  if (shouldPass) return true;
  else throw "Failure";
}

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

RetryOperation();
