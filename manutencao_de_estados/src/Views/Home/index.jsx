import { AntDesign } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import styles from './Style'

const Home = ({ setLogged }) => {
  const [count, setCount] = useState()
  const [database, setDatabase] = useState([])
  const [search, setSearch] = useState('')
  const [resposta, setResposta] = useState(false)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    async function fetchCount() {
      await axios
        .get('https://swapi.dev/api/people')
        .then(response => {
          setCount(response.data.count + 1)
        })
        .then(() => console.log('contagem: ', count))
    }
    let x = 0
    async function fetchChar() {
      const newDatabase = []
      console.log('Vai começar')

      for (let i = 1; i <= count; i++) {
        await axios
          .get(`https://swapi.dev/api/people/${i}/`)
          .then(response => {
            newDatabase.push(response.data)
            x++
            console.log(x)
          })
          .catch(() => {
            x++
            console.log('nao foi possivel capturar o numero')
          })
      }
      setDatabase(newDatabase)
      console.log(database)

      if (x === count) {
        console.log('True')
        setResposta(true)
      } else {
        console.log('False')
        setResposta(false)
      }
    }

    fetchCount().then(() => {
      fetchChar()
    })
  }, [count])

  const databaseSCH = database.filter(obj =>
    obj.name.toLowerCase().includes(search.toLowerCase())
  )

  let descicao

  if (resposta === false) {
    descicao = <Text>Carregando</Text>
  } else {
    descicao = databaseSCH.map((obj, index) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
      <View key={index} style={styles.itemContainer}>
        <Text style={styles.textItem}>
          #{index + 1} - {obj.name}
        </Text>
      </View>
    ))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoutContainer}>
        <ScrollView horizontal>
          <TouchableOpacity
            style={styles.scrollHorizontal}
            onPress={() => {
              Alert.alert('Atenção', 'Deseja realmente sair?', [
                { text: 'Não', style: 'cancel' },
                { text: 'Sim', onPress: () => setLogged(false) },
              ])
            }}
          >
            <AntDesign name="logout" size={24} color="black" />
            <Text>Sair</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Filtre os dados"
          keyboardType="email-address"
          onChangeText={setSearch}
        />
        <TouchableOpacity style={styles.searchButton}>
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView>{descicao}</ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Home
export { Home }
