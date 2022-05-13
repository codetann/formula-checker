import { sendMail } from "./mailer.js";
import { checkSamsClub } from "./samsclub.js";
import { checkStores } from "./schedule.js";

checkStores(async () => {
  const inStock = await checkSamsClub();

  if (inStock.store) {
    const subject = "Sam's Club is back in stock!";
    const text = `Location: In Store`;
    sendMail(subject, text);
  }

  if (inStock.online) {
    const subject = "Sam's Club is back in stock!";
    const text = `Location: Online`;
    sendMail(subject, text);
  }
});
