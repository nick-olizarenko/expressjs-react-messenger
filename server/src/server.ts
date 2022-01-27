import Express from 'express'
import Http from 'http'
import { Server as SocketIOServer } from 'socket.io'
import Cors from 'cors'
import BodyParser from 'body-parser'
import UserStorage from './storage/userStorage'
import ChatStorage from './storage/chatStorage'
import { ChatPreview } from '../../types'

const app = Express()
const server = Http.createServer(app)
const io = new SocketIOServer(server, { cors: { origin: '*' } })

const usersStorage = new UserStorage()
const chatsStorage = new ChatStorage(io)

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
    console.error('Get user error', err)
  }
})

app.get('/api/users', (req: Express.Request, res: Express.Response) => {
  try {
    const users = usersStorage.getUsers()

    res.json({ users })
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
    const { title, memberIds } = req.body
    if (!title && !memberIds) {
      return res.sendStatus(400)
    }

    const chat = chatsStorage.addChat({ title, memberIds })

    res.json({ chat })
  } catch (err) {
    console.error('Create chat error', err)
  }
})

app.get('/api/chat/:id', (req: Express.Request, res: Express.Response) => {
  try {
    const { id } = req.params
    if (!id) {
      return res.sendStatus(400)
    }

    const chat = chatsStorage.getChat(Number(id))

    res.json({ chat })
  } catch (err) {
    console.error('Create chat error', err)
  }
})

app.post('/api/chat/:id/message', (req: Express.Request, res: Express.Response) => {
  try {
    const { id: chatId } = req.params
    const { text, userId } = req.body
    if (!chatId || !text || !userId) {
      return res.sendStatus(400)
    }
    const user = usersStorage.getUser(userId)
    if (!user) {
      return res.sendStatus(400)
    }

    chatsStorage.addMessage(Number(chatId), { text, sender: user })

    res.sendStatus(200)
  } catch (err) {
    console.error('Create chat error', err)
  }
})

app.get(
  '/api/user/:id/chats',
  (req: Express.Request, res: Express.Response) => {
    try {
      const { id } = req.params
      if (!id) {
        return res.sendStatus(400)
      }

      let chats = chatsStorage.getChats()
      chats = chats.filter(
        (chat) =>
          (chat.type === 'group' ||
            (chat.memberIds && chat.memberIds.includes(Number(id)))),
      )

      const chatsPreviews: ChatPreview[] = chats.map((chat) => {
        const lastMessageIndex = chat.messages.length - 1
        const lastMessage: ChatPreview['lastMessage'] | null = lastMessageIndex > -1 ? {
          sender: chat.messages[lastMessageIndex].sender,
          text: chat.messages[lastMessageIndex].text,
          date: chat.messages[lastMessageIndex].date,
        } : null

        return {
          id: chat.id,
          title: chat.title,
          lastMessage,
        }
      })

      res.json({ chats: chatsPreviews })
    } catch (err) {
      console.error('Create chat error', err)
    }
  },
)

io.on('connection', socket => {
  socket.on('joinChat', chatId => {
    socket.join('chat_' + chatId)
  })
})

server.listen(8000)
