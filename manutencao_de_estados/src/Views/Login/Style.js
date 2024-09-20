import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 160,
    width: 160,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: width - 16,
    padding: 8,
    margin: 8,
  },
  loginButton: {
    flexDirection: 'row',
    gap: 8,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
})
