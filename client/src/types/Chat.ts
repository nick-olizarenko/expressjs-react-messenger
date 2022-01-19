export interface ChatPreview {
  id: number;
  avatar: string;
  title: string;
  lastMessage: {
    text: string;
    author: string;
    date: string;
  }
}
