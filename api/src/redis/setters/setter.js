import connectRedis from "../connect";
import { createLog } from "../../services/errors";

const client = connectRedis();

export function setEmailToRedis(mail) {
  client.set(mail.to, JSON.stringify(mail), (err, status) => {
    if (err) {
      createLog({ title: err.name, message: err.message });
    }
    console.log(status);
  });
}
