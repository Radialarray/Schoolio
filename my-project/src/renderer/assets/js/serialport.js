// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const Serialport = require('serialport')
let port

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
      console.log(data.toString())
    })
  })
}
