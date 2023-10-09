import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 13,
    backgroundColor: 'rgba(40,75,89, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 20, 
  },

  btn: {
    backgroundColor: '#6D96A6',
    width: '60%',
    margin: 20,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },

  btnText: {
    color: 'black',
    fontFamily: 'Arial',
    fontWeight: '600',
  },
});
