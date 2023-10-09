import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, 
  },
  profileContainer: {
    maxWidth: 600,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(40,75,89, 0.7)', 
    borderRadius: 10, 
    padding: 20, 
  },
  title: {
    color: 'white',
    fontSize: 24,
    padding: 5,
    fontFamily: 'Star Wars',
  },
  subTitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },
  inputGroup: {
    color: 'white',
    marginBottom: 20,
  },
  input: {
    color: 'white',
    width: '100%',
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc', 
  },
  
  profile: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    color: 'white',
    borderRadius: 5,
  },
  repositorio: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    color: 'white',
    padding: 20,
    borderRadius: 5,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  dataItem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 5,
    padding: 5,
  },
  secret: {
    color: 'white',
    fontSize: 18,
    marginTop: 20,
  },
  botao: {
    backgroundColor: '#6D96A6',
    width: '70%', 
    marginVertical: 20, 
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  }

});

export default styles;
