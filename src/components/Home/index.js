import {useHistory} from 'react-router-dom'
import {
  HomePageContainer,
  HomeContentContainer,
  HomeHeading,
  HomeParagraph,
  HomeRegisterBtn,
  RegisteredHeading,
  RegisteredTxt,
} from './homeStyles'
import {useMeetupContext} from '../../context/meetupContext'

export default function Home() {
  const history = useHistory()
  const {isRegistered, userName, topic} = useMeetupContext()

  return (
    <HomePageContainer>
      <div className="header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
        />
      </div>
      <HomeContentContainer>
        {isRegistered ? (
          <>
            <RegisteredHeading>{userName}</RegisteredHeading>
            <RegisteredTxt>{`Welcome to ${topic}`}</RegisteredTxt>
          </>
        ) : (
          <>
            <HomeHeading>Welcome to Meetup</HomeHeading>
            <HomeParagraph>Please register for the topic</HomeParagraph>
            <HomeRegisterBtn
              type="button"
              onClick={() => history.replace('/register')}
            >
              Register
            </HomeRegisterBtn>
          </>
        )}
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
        />
      </HomeContentContainer>
    </HomePageContainer>
  )
}
