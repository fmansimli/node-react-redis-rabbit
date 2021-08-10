import { createClient } from "redis";

const connectRedis = () => {
  const redisclient = createClient(); // default, localhost => port:6379

  redisclient.on_connect("error", (error) => {
    console.error(`$$ redis connection error!!! =>> ${error.message}`);
  });

  return redisclient;
};

export default connectRedis;
