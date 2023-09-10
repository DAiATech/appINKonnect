import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingBottom: 25,
    justifyContent: 'space-around',
    backgroundColor: "#121212",
  },
  containerScroll: {
    width: '100%',
    paddingHorizontal: 25,
    paddingTop: 10
  },
  divisorSecao: {
    width: '50%',
    paddingRight: 10,
    marginBottom: 10,
  },
  divisorSecaoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  form: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#413B33',
    paddingBottom: 10,
    marginTop: 20,
  },
  formLabel: {
    color: '#EAE0D5',
    fontWeight: '600',
    fontSize: 20,
  },
  inputTexto: {
    backgroundColor: '#121212',
    color: '#C6AC8F',
    height: 50,
    paddingHorizontal: 3,
  },
  btnSave: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B292F',
    marginTop: 15,
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
    marginBottom: 30,
    marginTop: 20
  },
  logoInk: {
    width: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
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
  iconePlus: {
    position: 'absolute'
  },


})


