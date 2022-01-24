import Express from 'express'
import Http from 'http'
import { Server as SocketIOServer } from 'socket.io'
import Cors from 'cors'
import BodyParser from 'body-parser'
import UserStorage from './storage/userStorage'

const app = Express()
const server = Http.createServer(app)
const io = new SocketIOServer(server)

const usersStorage = new UserStorage()

app.use(Cors({ origin: '*' }))
app.use(BodyParser.json())
app.get('/api/user/:id', (req: Express.Request, res: Express.Response) => {
  try {
    const { id } = req.params
    if (!id) {
      return res.sendStatus(400)
    }

    const user = usersStorage.getUser(Number(id))

    res.json({ user })
  } catch (err) {
    console.error('Register error', err)
  }
})

app.post('/api/user', (req: Express.Request, res: Express.Response) => {
  try {
    const { nickname } = req.body
    if (!nickname) {
      return res.sendStatus(400)
    }

    const user = usersStorage.addUser(nickname)

    res.json({ user })
  } catch (err) {
    console.error('Register error', err)
  }
})

app.post('/api/chat', (req: Express.Request, res: Express.Response) => {
  try {
    const { nickname } = req.body
    if (!nickname) {
      return res.sendStatus(400)
    }

    const user = usersStorage.addUser(nickname)

    res.json({ user })
  } catch (err) {
    console.error('Register error', err)
  }
})

io.on('connection', () => {
  console.log('connected to socket')
})

server.listen(3001)
