import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  logoutContainer: {
    margin: 4,
  },
  scrollHorizontal: {
    gap: 4,
    width: 80,
    height: 80,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 2,
  },
  textInputContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,0.1)',
    flex: 1,
    padding: 8,
    margin: 8,
  },
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  contentContainer: {
    flex: 1,
  },
  itemContainer: {
    margin: 4,
  },
  textItem: {
    fontSize: 16,
  },
})
