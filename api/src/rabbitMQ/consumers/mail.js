import { connect } from "amqplib";
import redisConnect from "../../redis/connect";
import sendEmail from "../../mail/mailSender";
import { createLog } from "../../services/errors";
const redisClient = redisConnect();

const mailConsumer = async () => {
  try {
    const connection = await connect(process.env.RABBIT_URL);
    const channel = await connection.createChannel();
    await channel.assertQueue("requests");

    console.log("** waiting message for (mails) queue");

    channel.consume("mails", (data) => {
      const mail = JSON.parse(data.content.toString());
      redisClient.set(mail._id, JSON.stringify(mail), (err, stt) => {
        if (err) {
          throw err;
        }
        console.log(`(${mail._id}) 's profile wrote to redis.. status:${stt}`);
      });

      sendEmail(mail);

      channel.ack(data);
    });
  } catch (error) {
    await createLog({
      title: error.name,
      message: `error=>> (${error.message})`,
    });
  }
};

export default mailConsumer;
