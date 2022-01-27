import { User } from './User'

export interface ChatPreview extends Pick<Chat, 'id' | 'title'> {
  lastMessage: Omit<Message, 'id' | 'chatId'> | null;
}

export interface Chat {
  id: number;
  title: string;
  type: 'direct' | 'group';
  messages: Message[];
  memberIds?: number[];
}

export interface Message {
  id: number;
  sender: User;
  chatId: number;
  text: string;
  date: Date;
}

export interface MyFriends {
  id: number;
  title: string;
  avatar: string
}
