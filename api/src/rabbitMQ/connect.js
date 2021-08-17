import { connect } from "amqplib";
//import { createLog } from "../services/errors";

const connectRabbit = async (queueName) => {
  try {
    const connection = await connect(process.env.RABBIT_URL);
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName);
    return channel;
  } catch (error) {
    console.error(`$$ rabbitMQ connection error!! =>>${error.message}`);
  }
};

export default connectRabbit;
