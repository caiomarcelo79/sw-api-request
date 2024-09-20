import { AntDesign } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './Style'

const Login = ({ setLogged }) => {
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: 'https://static.vecteezy.com/ti/vetor-gratis/t2/439863-icone-de-usuarios-de-gratis-vetor.jpg',
        }}
        style={styles.image}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Informe seu login"
        keyboardType="email-address"
        onChangeText={setLogin}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Informe sua senha"
        secureTextEntry={true}
        onChangeText={setSenha}
      />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          if (login === 'admin' && senha === 'senha') setLogged(true)
          else setLogged(false)
        }}
      >
        <Text>Login</Text>
        <AntDesign name="login" size={24} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Login
export { Login }
