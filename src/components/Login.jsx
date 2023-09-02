import { LoginWrapper } from '../assets/Wrappers/LoginWrapper'
import styles from '../assets/styles/login.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Toast from 'react-hot-toast'
 
const users =  [
  {
    "id": 1,
    "username": "amar",
    "password": "amar123"
  },
  {
    "id": 2,
    "username": "akbar",
    "password": "akbar123"
  },
  {
    "id": 3,
    "username": "antony",
    "password": "antony123"
  },
  {
    "id": 4,
    "username": "john",
    "password": "john123"
  },
  {
    "id": 5,
    "username": "paul",
    "password": "paul123"
  }
]

// custom hook for input field change
const useInputField = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  const onChange = (e) => {
    setValue(e.target.value)
  }
  return {
    value,
    onChange,
  }
}
const Login = () => {
  const userName = useInputField('')
  const password = useInputField('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  const login = () => {
    const user = users.filter((user) => user.username === userName.value)
    if (user.length === 0) {
      Toast.error('No user found ')
      return
    } else {
      if (user[0].password !== password.value) {
        Toast.error('Incorrect Password')
        return
      }
      setIsLoggedIn(true)
      setTimeout(() => {
        Toast.success('Login successfully!')
        navigate('/dashboard')
      }, 500)
      setIsLoggedIn(false)
    }
  }

  return (
    <LoginWrapper>
      <div className={styles.loginForm}>
        <div style={headerStyle.flex}>
          
          <h3>Login</h3>
        </div>
        <input
          className={styles.inputField}
          type='text'
          placeholder='User Name'
          {...userName}
          required
        />
        <input
          className={styles.inputField}
          type='password'
          placeholder='Password'
          {...password}
          required
        />
        <button className={styles.loginBtn} onClick={login}>
          {isLoggedIn ? 'Login in...' : 'Login'}
        </button>
      </div>
    </LoginWrapper>
  )
}

var headerStyle = {
  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    color: '#fff',
  },
}

export default Login
