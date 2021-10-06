require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remind around good arena bubble skin'; 
let testAccounts = [
"0x4af71e9bc188b1c35a1a9e3eeb5907aa339e60d9a4064fe081a8251d09ee54e5",
"0x86e243a57084e95305fbe15f2823b14f9c94d6dcce1bb6e4e9d67bff98531d39",
"0x9cf08cf3c6ad3e1ecbb9273003d76c942495ab6ecf2c26ef9fcfdace4ab963ae",
"0xc547990e512ea709c4bc4817ab8e927b11b67735e4a23411de37b2f9913e345f",
"0x8022ac99b33581a909f39ab8f9195d2098d7af7b8ce02b5f97fedf6afb3314fd",
"0x006d150487970f5400e6684a216ab4d34a8ed3a8a6ef21d4f0c01de1c20bf904",
"0x530b24363981e3fedd97851563ac2b2332ea09bfa07a70574bfcff62e17edfff",
"0xb8bc662a8e36425b014ad19db139f7b0be047bbf3710e47e75645a75f6d9d06f",
"0x900eb85587883d800d5902cf023a978a58c6b48238002df7e2d7438e099c154b",
"0x70cd3bdff7533a46b2afe565745c77ab09bcef3d36ce157d36959edc68e80ffa"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

