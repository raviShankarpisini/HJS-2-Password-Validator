// Write your code here
import {useState} from 'react'
import {Container, Heading} from './styledComponents'

const PasswordValidator = () => {
  const [inputValue, UseInput] = useState('')

  const onChangeInput = event => UseInput(event.target.value)

  return (
    <Container>
      <Container>
        <Heading>Password Validator</Heading>
        <p>Check how strong and secure is your password</p>
        <input type="password" onChange={onChangeInput} />
        {inputValue.length < 8 && (
          <p>Your password must be at least 8 characters.</p>
        )}
      </Container>
    </Container>
  )
}

export default PasswordValidator
