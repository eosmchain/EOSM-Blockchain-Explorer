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
`config.endpoints = ['http://88.99.183.30:8000'];`                                                                                    
1. Then, you also should provide current blockchain chainId to config.eosConfig.                                                               
`config.eosConfig = {                          
  chainId: "ea666b3d188bdbc8a448d34bca381c8d78abfd1c5e50afbb14d87531f0a443d0",                                
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
`config.customChain = 'http://88.99.183.30:8000';  `                                                                 
**api url for history**                                                          
`config.historyChain = 'http://88.99.183.30:8080';  `                   

## src/environments/environment.prod.ts set up
1. Set up actual blockchain chain id.                   
`const chain = 'ea666b3d188bdbc8a448d34bca381c8d78abfd1c5e50afbb14d87531f0a443d0';`                                          
1. Set up host, port and actual http node endpoint here.                           
`network: {                       
        blockchain: 'eos',                    
        host: 'http://88.99.248.77',                      
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
    },`               
                                    
## docker-compose                                      
   `docker-compose.example.yml`                            
   ```docker-compose up```                                             
                                                      
## Development server

1. Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
2. Also in another terminal window you have to start your backend part - `node server/server.js` (`http://localhost:3039/`)

## Build and start

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. Starting project `node server/server.js`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

