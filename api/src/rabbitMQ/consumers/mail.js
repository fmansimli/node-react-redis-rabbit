import connectQueue from "../connect";
import redisClient from "../../redis/connect";

const channel = connectQueue("mails");

const mailConsumer = async () => {
  try {
    channel.consume("mails", (data) => {
      const mail = JSON.parse(data.content.toString());
      redisClient.set(mail._id, JSON.stringify(mail), (err, stt) => {
        if (err) {
          throw err;
        }
        console.log(`(${mail._id})'s profile wrote to redis..`);
      });
    });
  } catch (error) {
    console.error(`error=>> (${error.message})`);
  }
};

export default mailConsumer;
