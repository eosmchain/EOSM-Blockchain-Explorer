# LightNet block explorer

[Angular CLI](https://github.com/angular/angular-cli) version 7.1.4

## manual installation 
	- node.js v.10^ https://nodejs.org/
	- npm install -g angular-cli@7.1.4
	- mongodb 4.0^ https://www.mongodb.com/

   
## Node set up 
Before running docker-compose, please set up node with mongo_db and optional hitstory, history_api plugins enabled.              

## Config.js set up
1. To set up eosConfig, you should set up config.endpoints with current blockchain working http endpoints.                                        
`config.endpoints = ['http://expnode.mgpchain.io'];`                                                                                    
1. Then, you also should provide current blockchain chainId to config.eosConfig.                                                               
`config.eosConfig = {                          
  chainId: "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f",                                
  keyProvider: "",                             
  httpEndpoint: config.endpoints[0],                           
  expireInSeconds: 60,                                
  broadcast: true,                                  
  debug: false,                              
  sign: true,                     
  logger: {                              
    error: console.error                                       
  }                        
};`                                   
1. Optionally, you also can set up api endpoints for producers list and history (history and history_api plugins should be enabled).                    
**api url for producers list**                                      
`config.customChain = 'http://expnode.mgpchain.io';  `                                                                 
**api url for history**                                                          
`config.historyChain = 'http://expnode.mgpchain.io';  `                   

## src/environments/environment.prod.ts set up
1. Set up actual blockchain chain id.                   
`const chain = 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f';`                                          
1. Set up host, port and actual http node endpoint here.                           
`network: {                       
        blockchain: 'eos',                    
        host: 'expnode.mgpchain.io',                      
        port: 80,                            
        protocol: 'http',                                
        expireInSeconds: 120,                                                 
        chainId: chain                               
    },                                
    chain: chain,                                   
    Eos: {                                
        httpEndpoint: 'http://expnode.mgpchain.io',                        
        chainId: chain,                          
        verbose: false                                
    },`               
                                    
## docker-compose                                      
   `docker-compose.example.yml`   
   * First-time
   ```docker-compose up --build```
   * Subsequent times                         
   ```docker-compose up```                                             
                                                      
## Development server

1. Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
2. Also in another terminal window you have to start your backend part - `node server/server.js` (`http://localhost:3039/`)

## Build and start

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. Starting project `node server/server.js`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
