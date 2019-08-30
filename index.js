const Web3 = require('web3');

let USER = "u0mjgm2y4w";
let PASS = "Djdo9n5iCIMY1s3AbvN77MFXbDn800idndJmvpSSwVI";
let RPC_ENDPOINT = "u0t1wfxa79-u0i4zhl18v-rpc.us0-aws.kaleido.io"; // Remove the leading https://

// HTTP Provider Example
// NOTE: The HTTP Provider is deprecated, as it won't work for subscriptions.
// See: https://web3js.readthedocs.io/en/1.0/web3.html#providers

let nodeUrl = "https://" + USER + ":" + PASS + "@" + RPC_ENDPOINT;

let provider = new Web3.providers.HttpProvider(nodeUrl);
let web3 = new Web3(provider);

// Now you can call web3 functions, so we'll just test the connection by getting the latest block in the chain.

web3.eth.getBlock("latest").then((latestBlock) => {
    console.log("Latest Block Via HTTP Provider: ")
    console.log(latestBlock);
    // Stop the program once this has finished
    process.exit();
});