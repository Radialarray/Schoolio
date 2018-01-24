// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// export const Serialport = require('serialport')
import Serialport from 'serialport'
var port

export var uid = '04 22 197 26 170 82 129'

export var stillConnected = false

Serialport.list((err, ports) => {
  console.log('ports', ports)
  if (err) {
    console.log(err.message)
    return
  } else {}

  if (ports.length === 0) {
    console.log('No ports discovered')
  } else {
    findArduino(ports)
  }
})

function findArduino (ports) {
  let result = ports.filter(function (obj) {
    return obj.productId === '7523'
  })
  console.log(result)
  if (result.length !== 0) {
    openPort(result)
  }
  return result
}

function openPort (portObj) {
  console.log(portObj[0].comName)
  port = new Serialport(portObj[0].comName, () => {
    console.log('Port Opened')
    port.on('data', (data) => {
      /* get a buffer of data from the serial port */
      // return console.log(data.toString())
      receiveMessage(port)
    })
  })
}

function receiveMessage () {
  port.on('data', (data) => {
    /* get a buffer of data from the serial port */
    // console.log('yeassss')
    var str = data.toString()
    if (str.search('Card UID:') > 0) {
      console.log('TREFFER')
      str = str.replace(/[^\d]/g, '')
    }
    return console.log(str)
  })
}

export function checkMessage (message) {
  if (message === uid) {
    return true
  } else {
    return false
  }
}
// // Declare variables
// let obj
// let filePath = './data/userdata.json'
// // Read the file and send to the callback
// fs.readFile(filePath, readFromJson)
//
// // Write the callback function
// function readFromJson (err, data) {
//   if (err) throw err
//   obj = JSON.parse(data)
//   console.log(obj)
//   writeToJson(obj)
// }
//
// function writeToJson (content) {
//   let stringied = JSON.stringify(content)
//   fs.writeFile('./data/userdata.json', stringied, 'utf8', function (err) {
//     if (err) {
//       return console.log(err)
//     }
//     console.log('The file was saved!')
//   })
// }
