import connectRedis from "../connect";
import sendEmail from "../../mail/mailSender";
import { setEmailToRedis } from "../setters/setter";

const redisClient = connectRedis();

const listenToMails = async () => {
  redisClient.on("message", (channel, message) => {
    const mail = JSON.parse(message);
    sendEmail(mail);
    setEmailToRedis(mail);
  });

  redisClient.subscribe("mails");
};

export default listenToMails;
