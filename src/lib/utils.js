const sleep = (timeout = 1000) => new Promise((resolve, reject) => setTimeout(resolve, timeout));

module.exports = {
  sleep
};