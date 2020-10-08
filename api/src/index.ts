import http from 'http'
import express, { Request, Response } from 'express'
import logger from 'morgan'

const app = express()

app.use(logger('combined'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', (req: Request, res: Response) => {
  res.json({data: "index!"})
})

var port = process.env.PORT || '3000'
app.set('port', port)

var server = http.createServer(app)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)



function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

function onListening() {
  const addr = server.address()
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  console.log('Listening on ' + bind)
}
