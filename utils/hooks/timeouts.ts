var { setDefaultTimeout } = require('cucumber');  // Set Timeout for Cucumber to avoid - Error: function timed out, ensure the promise resolves within 5000 milliseconds 
setDefaultTimeout(100 * 1000);