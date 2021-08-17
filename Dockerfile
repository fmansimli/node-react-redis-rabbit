FROM node:14-slim
WORKDIR /opt/nodejs/node-react
COPY . .

# RUN npm install -g serve
RUN npm install -g pm2
RUN npm run download
RUN npm run docker

CMD ["npm","run","up"]
