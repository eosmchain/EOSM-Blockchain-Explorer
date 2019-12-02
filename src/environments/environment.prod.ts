const chain = '702fb553f12132f3854614b2dfc3712d4426a1a99335b17e08a3a8a6c13a9667';
export const environment = {
    production: true,
    appName: 'LightNet',
    network: {
        blockchain: 'eos',
        host: '88.99.248.77',
        port: 8000,
        protocol: 'http',
        expireInSeconds: 120,
        chainId: chain
    },
    chain: chain,
    Eos: {
        httpEndpoint: 'http://88.99.248.77:8000',
        chainId: chain,
        verbose: false
    },
    frontConfig: {
       coin: 'LTN',
       bp: 'bp.json',
       tokenContract: 'eosio.token',
       totalBalance: 'LTN',
       convertToUSD: false,
       customBalance: false,
       logo: '/assets/images/ltnweb.png',
       name: {
          big: '',
          small: ''
       },
       nets: [{ name: 'MIO', url: '127.0.0.1:3039', active: true }],
       disableNets: true,
       voteDonationAcc: 'eoswebnetbp1',
       disableVoteDonation: true,
       version: '2.2.8',
       producers: 1000,
       social: [
       ],
       liveTXenable: true
    }
};
