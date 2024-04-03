import express, { Application } from 'express'
import cors from 'cors'
import http from 'http';
import { Server, Socket } from 'socket.io';
import routes from './routes'

export const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_, res) => res.send('Project somethingGame'))

app.use('/api', routes)

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket: Socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

const PORT = 8080

try {
  server.listen(PORT, (): void => {
    console.log(`Connected successfully on port ${PORT}`)
  })
} catch (error) {
  console.error(`Error occured: ${(error as Error).message}`)
}
