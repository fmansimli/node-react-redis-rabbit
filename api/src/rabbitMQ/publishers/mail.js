import connectQueue from "../connect";
import { createLog } from "../../services/errors";

const channel = connectQueue("mails");
const mailPublisher = async (mail) => {
  try {
    channel.sendToQueue("mails", Buffer.from(mail));
    console.log(`${mail._id} >> sended to (mails) queue..`);
  } catch (error) {
    await createLog({
      title: error.name,
      message: `publisher error==>>(${error.message})`,
    });
  }
};

export default mailPublisher;
