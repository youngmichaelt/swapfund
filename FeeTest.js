// console.log("test");
// //const { ethers } = require("ethers");

// //import detectEthereumProvider from '@metamask/detect-provider';
// import { ethers } from 'ethers';

// // import { ethers } from "https://cdn.ethers.io/lib/ethers-5.2.esm.min.js";

// // If you don't specify a //url//, Ethers connects to the default 
// // (i.e. ``http:/\/localhost:8545``)
// const provider = new ethers.providers.JsonRpcProvider();

// // The provider also allows signing transactions to
// // send ether and pay to change state within the blockchain.
// // For this, we need the account signer...
// const signer = provider.getSigner()

// balance = await provider.getBalance("ethers.eth")

// console.log(balance)

var ethers = require('ethers');  
var url = 'ADD_YOUR_ETHEREUM_NODE_URL';
// If you don't specify a //url//, Ethers connects to the default 
// (i.e. ``http:/\/localhost:8545``)
const provider = new ethers.providers.JsonRpcProvider();

// The provider also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, we need the account signer...
const signer = provider.getSigner()

balance = provider.getBalance("ethers.eth")

console.log(balance);
