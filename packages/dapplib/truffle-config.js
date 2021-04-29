require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name release pitch snake good kitchen suspect gather'; 
let testAccounts = [
"0x70c414961110bb0f11a63cd60e9b536431752a94a9e838db47ed00d4c43595dd",
"0x514d34e90019d6eb4e2b86086426d2795ac3462b12c67fb4db1dae31d441ae73",
"0x8ea7df61918217f1a547f33a4268070034050e9779cd82d1da0f7507d3a052d1",
"0x80743eecdc12b1c743a34428336b06c89ecd0077722ddf1c3e351e4c0396a9de",
"0x33d7d5136c7def8e016c8042c8a5a8eed4b2ae28a7843478c6f6d94cce4d50ad",
"0x0e0938f02b257e2cc7f84353dfdfb73e21ffca4f491f132a08e599073cfcc643",
"0x72261a273ddf3ecc651b025fac3ac26b45124b5a421204e5e303e14bb6cbd42d",
"0x7a0dd4a56ca53f6b7b6c0f5d4c640a155291d9862beb03c49f8896a8288ee611",
"0xa6dee5a0ff162a9b4128ddcd071823b2361a3f28d852c2cbe577f52b8e70371b",
"0xe75548935227661bdd4a5a08052f94b8876fda30f28d6350576ead7bbad1a901"
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
            version: '^0.5.11'
        }
    }
};
