import {useState, useContext, createContext} from 'react'

const MeetupContext = createContext()

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

const MeetupContextProvider = ({children}) => {
  const [isRegistered, setIsRegistered] = useState(false)
  const [userName, setUserName] = useState('')
  const [topic, setTopic] = useState(topicsList[0].id)

  return (
    <MeetupContext.Provider
      value={{
        isRegistered,
        setIsRegistered,
        userName,
        setUserName,
        topic,
        setTopic,
      }}
    >
      {children}
    </MeetupContext.Provider>
  )
}

function useMeetupContext() {
  const context = useContext(MeetupContext)
  if (context === undefined) {
    throw new Error('Context was used outside the Context Provider.')
  }
  return context
}

// export custom context hook and context provider
export {useMeetupContext, MeetupContextProvider}
