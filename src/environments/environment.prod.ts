const chain = 'ea666b3d188bdbc8a448d34bca381c8d78abfd1c5e50afbb14d87531f0a443d0';
export const environment = {
    production: true,
    appName: 'LTNweb',
    network: {
        blockchain: 'eos',
        host: 'http://0.0.0.0',
        port: 8005,
        protocol: 'http',
        expireInSeconds: 120,
        chainId: chain
    },
    chain: chain,
    Eos: {
        httpEndpoint: 'http://0.0.0.0:8005',
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
       logo: '/assets/images/eosweb.png',
       name: {
          big: 'LTN',
          small: 'lightNet'
       },
       nets: [{ name: 'LTN', url: '127.0.0.1:3039', active: true }],
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