const express = require('express');
const app = express();
const birds = require('./birds');
const Web3 = require("web3");
const Accounts = require("web3-eth-accounts");

const _user = "angel ";
const _pass = "1234";
const _rpc_endpoint = "192.168.50.226:22000";
let nodeUrl = "https://" + _user + ":" + _pass + "@" + _rpc_endpoint;

const web3 = new Web3(
    new Web3.providers.HttpProvider("http://192.168.50.226:22000")
);
// //
// let USER = "";
// let PASS = "";
// let RPC_ENDPOINT = "";

// // HTTP Provider Example
// // NOTE: The HTTP Provider is deprecated, as it won't work for subscriptions.
// // See: https://web3js.readthedocs.io/en/1.0/web3.html#providers

// let nodeUrl = "https://" + USER + ":" + PASS + "@" + RPC_ENDPOINT;

// let provider = new Web3.providers.HttpProvider(nodeUrl);
// let web3 = new Web3(provider);
// //web3.eth.getBlock("latest").then(console.log);
// //web3.eth.accounts.wallet.then(console.log);
// //web3.eth.accounts.wallet.create(2, '54674321§3456764321§345674321§3453647544±±±§±±±!!!43534534534534').then(console.log);
// //web3.eth.personal.newAccount('!@superpassword').then(console.log);
// /*
// createWallet = cb => {
//     cb(web3.eth.accounts.create());
// };
// createWallet(result => {
//     console.log("Wallet Add is:", result.address);
//     console.log("Private Key is:", result.privateKey);
// });*/
// //web3.eth.personal.newAccount('!@superpassword').then(console.log);
// //web3.eth.defaultAccount.then(console.log);
// web3.eth.getCoinbase().then(console.log);
// web3.eth.getAccounts().then(console.log);
// createWallet = cb => {
//     cb(web3.eth.defaultAccount);
// };
// createWallet(result => {
//     console.log(result);
//     //console.log("Wallet Add is:", result.address);
//     //console.log("Private Key is:", result.privateKey);
// })
// //web3.eth.personal.sign("Hello world", "0xA9E9B03299fF4F59cEdB75791A435C75fD4D2D39", "!@superpassword").then(console.log);
// web3.eth.personal.unlockAccount("0xA9E9B03299fF4F59cEdB75791A435C75fD4D2D39", "!@superpassword", 600).then(console.log('Account unlocked!'));
// //web3.eth.accounts.wallet;
// /*
// web3.eth.getBlock("latest").then((latestBlock) => {
//     console.log("Latest Block Via HTTP Provider: ")
//     console.log(latestBlock);
//     // Stop the program once this has finished
//     process.exit();
// });

/**
 * Index
 */
app.get('/', function (req, res) {
    //const account = web3.eth.accounts[0];
    // let provider = new Web3.providers.HttpProvider(nodeUrl);
    // let web3 = new Web3(provider);
    let lastest = JSON.stringify(web3.eth.getBlock("latest"));
    res.status(200).json({
        message: lastest
    });
});
/**
 * Obtener numero de bloque
*/
app.get('/block', function (req, res) {
    console.log(req.query);
    res.status(200).json({
        message: 'Hello Block'
    });
});
/**
 * Crear una nueva cuenta
 */
app.get('/newaccount', function (req, res) {
    //console.log(req.query);
    res.status(200).json({
        message: 'Hello Acount'
    });
});
/**
 * Desbloquear cuenta
 */
app.get('/unlockaccount', function (req, res) {
    //console.log(req.query);
    res.status(200).json({
        message: 'Hello Unlock'
    });
});
app.use('/birds', birds);
module.exports = app;