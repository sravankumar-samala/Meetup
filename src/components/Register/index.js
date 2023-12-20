import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {
  RegisterPageContainer,
  RegisterContentContainer,
  RegisterFormContainer,
  RegisterForm,
  RegisterNowBtn,
  ErrorTxt,
} from './registerStyles'
import {useMeetupContext} from '../../context/meetupContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

export default function Register() {
  const {
    setIsRegistered,
    userName,
    setUserName,
    topic,
    setTopic,
  } = useMeetupContext()
  const [errorMsg, setErrorMsg] = useState('')
  const history = useHistory()

  const onRegister = e => {
    e.preventDefault()
    if (userName !== '') {
      setIsRegistered(true)
      history.replace('/')
      if (errorMsg) setErrorMsg('')
    } else {
      setErrorMsg('Please enter your name')
    }
  }

  const onUserNameChange = e => {
    setUserName(e.target.value)
    setErrorMsg('')
  }

  return (
    <RegisterPageContainer>
      <div className="header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
        />
      </div>
      <RegisterContentContainer>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
          alt="website register"
        />
        <RegisterFormContainer>
          <RegisterForm onSubmit={onRegister}>
            <h1>Let us join</h1>
            <label htmlFor="user-name">name</label>
            <input
              type="text"
              id="user-name"
              value={userName}
              onChange={onUserNameChange}
              placeholder="Your name"
            />
            <label htmlFor="topic">topics</label>
            <select
              id="topic"
              value={topic}
              onChange={e => setTopic(e.target.value)}
            >
              {topicsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <RegisterNowBtn type="submit">Register Now</RegisterNowBtn>
            <ErrorTxt>{errorMsg}</ErrorTxt>
          </RegisterForm>
        </RegisterFormContainer>
      </RegisterContentContainer>
    </RegisterPageContainer>
  )
}
