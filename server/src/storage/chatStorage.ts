import { Server as SocketIOServer } from 'socket.io'

import { Chat, Message } from '../../../types'

export default class ChatStorage {
  private chats: Chat[] = [
    {
      id: 1,
      type: 'group',
      title: 'Global Chat',
      messages: [
        {
          id: 1,
          text: 'Hey, welcome guys!',
          chatId: 1,
          sender: { id: 1, nickname: 'Nikita' },
          date: new Date()
        }
      ]
    },
    {
      id: 2,
      type: 'group',
      title: 'VIP Chat',
      messages: [
        {
          id: 1,
          text: 'Here is super VIP chat!',
          chatId: 2,
          sender: { id: 2, nickname: 'Hanna' },
          date: new Date()
        }
      ]
    }
  ]

  private io: SocketIOServer

  constructor (io: SocketIOServer) {
    this.io = io
  }

  private getNextId = () => this.chats.length + 1

  addChat ({ title, memberIds }: Pick<Chat, 'title' | 'memberIds'>) {
    const id = this.getNextId()

    const type = !memberIds ? 'group' : 'direct'
    title = title || 'Chat #' + id

    this.chats.push({ id, title, type, memberIds, messages: [] })

    return this.getChat(id) as Chat
  }

  getChat (id: number): Chat | null {
    const chat = this.chats.find((chat) => chat.id === id)

    return chat || null
  }

  setChat (id: number, data: Chat) {
    const chatIndex = this.chats.findIndex((chat) => chat.id === id)
    if (chatIndex > -1) {
      this.chats[chatIndex] = data
    }
  }

  addMessage (chatId: number, message: Pick<Message, 'sender' | 'text'>): void {
    const chat = this.getChat(chatId)
    if (chat && message.text && message.sender) {
      const id = chat.messages.length + 1
      const _message = { id, chatId, ...message, date: new Date() }
      chat.messages.push(_message)

      this.setChat(chatId, chat)
      this.io.emit('newMessage', { chatId: chat.id, message: _message })
      this.io.to('chat_' + chat.id).emit('newMessagePrivate', { message: _message })
    }
  }

  getChats (): Chat[] {
    return this.chats
  }
}
