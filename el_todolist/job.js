'use strict'
let mycron = require('cron').CronJob
let job = new mycron({
  cronTime: '*/1 * * * *',
  onTick:function() {
    console.log("1 minute")
    fetchTaskList()
  },
  start: true,
  timeZon: 'Japan/Tokyo'
})
job.start()