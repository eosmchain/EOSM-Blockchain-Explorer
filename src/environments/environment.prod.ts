const chain = 'd693c8e03737cd117cc54eeb3d33e6c6648484ea9576bc94e623fef27199d5bb';
export const environment = {
    production: true,
    appName: 'Mango global payment system',
    network: {
        blockchain: 'eos',
        host: '202.60.241.144',
        port: 8000,
        protocol: 'http',
        expireInSeconds: 120,
        chainId: chain
    },
    chain: chain,
    Eos: {
        httpEndpoint: 'http://0.0.0.0:8000',
        chainId: chain,
        verbose: false
    },
    frontConfig: {
       coin: 'MGP',
       bp: 'bp.json',
       tokenContract: 'eosio.token',
       totalBalance: 'MGP',
       convertToUSD: false,
       customBalance: false,
       logo: '/assets/images/mgpweb.png',
       name: {
          big: '',
          small: ''
       },
       nets: [{ name: 'MGP', url: '127.0.0.1:3039', active: true }],
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
