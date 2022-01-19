import styled from 'styled-components'

import { User } from '../types/User'
import NotificationIcon from './icons/NotificationIcon'
import HeartIcon from './icons/HeartIcon'
import UserIcon from './icons/UserIcon'
import InfoIcon from './icons/InfoIcon'


interface Props {
  user: User
}

export default function Header({ user }: Props) {
  return (
    <HeaderContainer>
      <Account>
        <Avatar>
          <img src={`https://picsum.photos/id/${user.id}/100`}/>
        </Avatar>
        <span>{user.name}</span>
      </Account>
      <RightMenu>
        <Tabs>
          <span>Messenger</span>
        </Tabs>
        <Settings>
          <Button>
            <NotificationIcon />
          </Button>
          <Button>
            <HeartIcon />
          </Button>
          <Button>
            <UserIcon />
          </Button>
          <Button>
            <InfoIcon />
          </Button>
        </Settings>
      </RightMenu>
    </HeaderContainer>
  )
}

const avatarImage = '/avatarImage.png'

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  border-bottom: solid 2px #E5E5E5;
  box-shadow: 0px 2px 4px #E5E5E5;
`

const Account = styled.div`
  width: 50%;
  display: flex;
  padding-left: 15px;

  span{
    padding: 23px 10px;
    font-size: 16px;
    font-weight: 600;
    color: #2D1F63;
  }
`

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  display: inline-block;
  padding: 12px 0;

  img{
    width: 100%;
    height: 100%;
    border-radius: 100px;
  }
`

const Tabs = styled.div`
  padding: 23px 0;
  color: #2D1F63;
  position: relative;
  :after{
    content: "";
    border-bottom: solid 4px #2D1F63;
    background-color: #2D1F63;
    color: #2D1F63;
    display: block;
    position: inherit;
    top: 27px;
    border-radius: 100px;
  }
`

const Settings = styled.div`
  height: 64px;
  float: right;
  display: flex;
  position: absolute;
  right: 0;
`

const RightMenu = styled.div`
  display: flex;
  width: 50%;
`

const Button = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  background: transparent;
  border-radius: 3px;
  display: block;
  padding: 20px 15px;
  color: #2D1F63;

  :hover {
    opacity: .7;
  }
`
