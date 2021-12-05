FROM node:10.15.3

ARG PORT=3039
ENV PORT=${PORT}

ARG CONFIG_NET=production
ENV CONFIG_NET=${CONFIG_NET}

WORKDIR /home/eosweb
COPY . /home/eosweb

RUN npm update
RUN npm install -g pm2@2.10.4
RUN npm install -g @angular/cli@7.1.4
RUN npm i --save eos-ulm@0.3.0
RUN npm i --save rxjs-compat@6.3.3
RUN cd /home/eosweb && npm update && npm install --unsafe-perm
RUN cd /home/eosweb && node patch
RUN cd /home/eosweb/server && npm install --unsafe-perm
RUN cd /home/eosweb && npm i --save rxjs-compat@6.3.3 && ng build --configuration=${CONFIG_NET}

CMD ["pm2-runtime", "/home/eosweb/server/ecosystem.config.js", "--web"]

EXPOSE ${PORT}
EXPOSE 9615
