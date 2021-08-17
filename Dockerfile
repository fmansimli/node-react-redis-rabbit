FROM node:14-slim
WORKDIR /opt/nodejs/node-react
COPY . .
RUN npm install
# RUN npm install -g serve
RUN npm install -g pm2
RUN npm run build
RUN npm run api
RUN npm run move
CMD ["npm","run","app"]
