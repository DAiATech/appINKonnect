import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: 'space-around',
    backgroundColor: "#121212",
  },
  containerScroll: {
    width: '100%',
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  btnData: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B292F',
    marginTop: 10,
    width: 150,
    height: 45,
    borderRadius: 5,
  },
  textBtnData: {
    fontFamily: fonts.text,
    fontSize: 18,
    fontWeight: '900',
    color: '#C6AC8F',
  },

  form: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#413B33',
    paddingBottom: 10,
    marginTop: 50,
  },

  formLabel: {
    color: '#EAE0D5',
    fontWeight: '600',
    fontSize: 20,
  },

  formLabelEmail: {
    color: '#EAE0D5',
    marginTop: 0,
    fontWeight: '600',
    fontSize: 20,
  },
  formLabelData: {
    color: '#EAE0D5',
    fontWeight: '600',
    fontSize: 20,
  },

  login: {
    backgroundColor: '#121212',
    color: '#C6AC8F',
    height: 50,
    paddingHorizontal: 3,
/*     backgroundColor: '#f0f',
 */  },


  loginSave: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B292F',
    marginTop: 25,
    width: '100%',
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
    alignSelf: 'center',
    marginTop:20,
  },
  logoInk: {
    width: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom:20,
  },
  titleText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20
  },
  textoIcon: {
    color: 'white',
    fontSize: 18,
  },
  divisorRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  divisorSecao: {
    width: '50%',
    paddingRight: 10
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
  button: {
    width: 150,
    height: 150,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#C6AC8F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  containerTwoInputs: {
    flex: 1,
    flexDirection: 'row',
  },
  avatar: {
    flex: 1,
    borderRadius: 20,
    zIndex: 10,
  },
  iconePlus: {
    position: 'absolute'
  },

})


