import { Text, View, TextInput } from 'react-native'
import React, {useState} from 'react'
import { MainWrapper } from './components'
import { Styles } from './styles'

const TextScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [pwfocused, setPwfocused] = useState(false)

  return (
    <MainWrapper>
      <Text style={Styles.H1_BOLD}>Text Input Screen</Text>
      <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        style={Styles.TextInputMedium}
        placeholder='User name here...'
        value={username}
        onChangeText={newValue => setUsername(newValue)}
      />
      <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        style={Styles.TextInputMedium}
        placeholder='Last name here...'
        value={password}
        onChangeText={newValue => setPassword(newValue)}
        onFocus={() => setPwfocused(true)}
        onBlur={() => setPwfocused(false)}
      />
      <View style={{margin: 15,}}>
        <Text style={Styles.H2}>Username: {username} </Text>
        <Text style={Styles.H2}>Password: {password}</Text>
        {pwfocused === true && password.length < 4 
          ? <Text>Password must be at least four characters</Text>
          : null
        }
      </View>
    </MainWrapper>
  )
}

export { TextScreen }
