import connectRedis from "../connect";
import { createLog } from "../../services/errors";
import { getAllUsersEmails } from "../../services/users";

const redisClient = connectRedis();

const publishMail = async (mail) => {
  try {
    const emails = await getAllUsersEmails();
    emails.forEach((email) => {
      redisClient.publish(
        "mails",
        JSON.stringify({ ...mail, to: email }),
        (err, number) => {
          if (err) {
            createLog({ title: err.name, message: err.message });
          }
          console.log(`message sent to ${number} subscribers...`);
        }
      );
    });
  } catch (error) {
    createLog({ title: error.name, message: error.message });
  }
};

export default publishMail;
