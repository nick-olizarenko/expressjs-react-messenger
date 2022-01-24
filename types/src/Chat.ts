import { User } from './User'

export interface ChatPreview extends Omit<Chat, 'messages' | 'type'> {
  id: number;
  title: string;
  lastMessage: Omit<Message, 'id' | 'chatId'>;
}

export interface Chat {
  id: number;
  title?: string;
  type: 'direct' | 'group';
  messages: Message[];
  memberIds: number[];
}

export interface Message {
  id: number;
  sender: User;
  chatId: number;
  text: string;
  date: string;
}
