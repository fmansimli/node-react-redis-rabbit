import connectQueue from "../connect";

const channel = connectQueue("mails");
const mailPublisher = async (mail) => {
  try {
    channel.sendToQueue("mails", Buffer.from(mail));
    console.log(`${mail._id} >> sended to (mails) queue..`);
  } catch (error) {
    console.error(`publisher error==>>(${error.message})`);
  }
};

export default mailPublisher;
