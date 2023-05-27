import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 50,
    paddingTop: 20,
    justifyContent: 'space-around',
    backgroundColor: "#121212",
  },

  form: {
    width: '100%',
    alignContent: 'space-around',
    borderBottomWidth: 2,
    borderBottomColor: '#413B33',
    paddingBottom: 5,
    marginTop: 20,
  },

  formLabel: {
    color: '#EAE0D5',
    marginTop: 20,
    fontWeight: '600',
    fontSize: 20,
  },
  buttons: {
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    paddingBottom: 0,
    marginTop: 0,
  },
  login: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#121212',
    color: '#C6AC8F',
    width: '100%',
    height: 50,
    paddingLeft: 3,
    marginBottom: 10,
    marginTop: 8,
  },


  loginSave: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B292F',
    margin: 10,
    width: '100%',
    height: 60,
    borderRadius: 10,
  },

  loginVoltar: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#1B292F',
    margin: 10,
    width: '50%',
    height: 60,
    borderRadius: 10,
  },

  text: {
    color: '#C6AC8F',
    fontSize: 20,
    fontWeight: '900',
    fontFamily: fonts.text,
  },

  logo: {

  },
  logoInk: {
    width: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  textoIcon: {
    color: 'white',
    fontSize: 18,
  },

  google: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1656ec',
    borderRadius: 5,
    width: 50,
    marginTop: 10,
  },

  apple: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1656ec',
    borderRadius: 5,
    width: 50,
    marginTop: 10,
    marginLeft: 10,
  },

  row: {
    flexDirection: 'row',
  },

  forget: {
    color: '#737373',
    fontSize: 14,
    marginTop: 40,
  },

  textRow: {
    alignSelf: 'center',
    fontFamily: fonts.text,
    fontSize: 16,
    color: 'black',
    marginTop: 5,
    marginRight: 5,
  },

  traco: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#C1C1C1',
    width: '80%',
  },

  signup: {
    color: '#737373',
  },

  signupQ: {
    color: 'black',
  },

})


