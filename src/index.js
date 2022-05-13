import { sendMail } from "./mailer.js";
import { checkSamsClub } from "./samsclub.js";
import { checkStores } from "./schedule.js";

checkStores(async () => {
  const samsClubIsInStock = await checkSamsClub();

  if (samsClubIsInStock.inStore) {
    const subject = "Sam's Club is back in stock!";
    const text = `Location: In Store`;
    sendMail(subject, text);
  }

  if (samsClubIsInStock.online) {
    const subject = "Sam's Club is back in stock!";
    const text = `Location: Online`;
    sendMail(subject, text);
  }
});
