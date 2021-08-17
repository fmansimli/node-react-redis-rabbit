import { createClient } from "redis";
import { createLog } from "../services/errors";

const connectRedis = () => {
  const redisclient = createClient({ host: process.env.REDIS_URL, port: 6379 });

  redisclient.on("error", (error) => {
    createLog({
      title: "RedisConnectionError",
      message: `$$ redis connection error!!! =>> ${error.message}`,
    });
  });

  return redisclient;
};

export default connectRedis;
