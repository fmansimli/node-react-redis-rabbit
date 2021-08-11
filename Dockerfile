FROM node:14-slim
WORKDIR /opt/nodejs/node-react
COPY . .
COPY api .
COPY public .
COPY src .
RUN npm install
RUN npm install -g live-server
RUN npm run api:pull

CMD ["npm run api:serve"]
CMD ["live-server","build/"]
