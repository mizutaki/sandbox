'use strict'
let baseURL = 'http://localhost:3000'
let redmineTicket = document.getElementById('redmineTicket')

function fetchTaskList() {
  let request = require('request')
  let apiURL = '/issues.json'
  let url = baseURL + apiURL
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      let object = JSON.parse(body)
      let data = object.issues
      taskListRender(data)
    } else {
      console.log('error')
    }
  })
}