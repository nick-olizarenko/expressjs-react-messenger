import styled from 'styled-components'

import { ChatPreview } from '../../../../../types'
import { dateToLocaleString } from '../../../utils'

interface Props {
  chat: ChatPreview
  isSelected: boolean
  onClick: (userId: number) => void
}

export default function ChatListItem ({ chat, onClick, isSelected }: Props) {
  return (
    <Wrapper onClick={() => onClick(chat.id)} isSelected={isSelected}>
      <Avatar>
        <img src={`https://picsum.photos/id/${100 + chat.id}/100`} alt={chat.title} />
      </Avatar>
      <Preview>
        <Title>{chat.title}</Title>
        <Message>
              <span>
                {chat.lastMessage.sender.nickname}:
              </span>
          <span>{chat.lastMessage.text}</span>
        </Message>
      </Preview>
      <Info>
        <Date>{dateToLocaleString(chat.lastMessage.date)}</Date>
      </Info>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ isSelected: boolean }>`
  padding: 15px 25px;
  display: flex;
  position: relative;
  cursor: pointer;

  :after {
    content: '';
    position: absolute;
    width: 65%;
    height: 2px;
    background: rgba(0, 0, 0, 0.12);
    left: calc(50% - 32.5%);
    bottom: 0;
    transition: all .4s;
  }

  ${(props) => props.isSelected ? `
      background: rgba(0, 0, 0, 0.12);
          :after {
      opacity: 0;
    }
  `: ''}
  :hover {
    background: rgba(0, 0, 0, 0.12);

    :after {
      opacity: 0;
    }
  }
`

const Avatar = styled.div`
  width: 54px;
  height: 50px;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`

const Preview = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  width: calc(100% - 15% - 50px);
  padding-top: 7px;
`

const Title = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`

const Message = styled.div`
  font-size: 13px;
  color: #6C6C6C;

  span:first-of-type {
    font-weight: bold;
    margin-right: 3px;
  }
`

const Info = styled.div`
  position: absolute;
  right: 5px;
  overflow: visible;
  text-align: right;
  padding-top: 7px;
`

const Date = styled.div`
  font-size: 13px;
  color: #6C6C6C;
`
