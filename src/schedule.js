import schedule from "node-schedule";

function checkStores(callback) {
  const rule = new schedule.RecurrenceRule();
  rule.hour = [9, 17];

  schedule.scheduleJob(rule, callback);
}

export { checkStores };
