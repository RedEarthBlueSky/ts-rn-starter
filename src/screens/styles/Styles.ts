import { Button, StyleSheet } from 'react-native'

const Shadows = StyleSheet.create({
  ButtonShadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  }
})

const Spacing = StyleSheet.create({
  MarginXL: {
    margin: 50,
  },
  MarginL: {
    margin: 30,
  },
  MarginM: {
    margin: 20,
  },
  MarginS: {
    margin: 10,
  },
  MarginXS: {
    margin: 5,
  }
})

const Typography = StyleSheet.create({
  H0: {
    fontSize: 40,
  },
  H1_BOLD: {
    fontSize: 30,
    fontWeight: "bold",
  },
  H2: {
    fontSize: 26,
    margin: 0,
    padding: 0,
  },
  H2_BOLD: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  H3: {
    fontSize: 20,
  },
  H3_BUTTON_M: {
    color: 'white',
    fontSize: 20,
  },
})

const BasicButtons = StyleSheet.create({
  ButtonMedium: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'blue',
    borderRadius: 5,
    height: 35, 
    justifyContent: 'center',
    marginTop: 5,
    width: '60%', 
  },
})

const Layout = StyleSheet.create({ 
  colorBox: {
    height: 90, 
    width: 100, 
    alignSelf: 'center',
    marginTop: 10,
  },
  TextInputMedium: {
      backgroundColor: 'wheat',
      borderColor: 'rgba(0, 0, 0, 0.2)',
      borderWidth: 1,
      borderRadius: 5,
      height: 45, 
      margin: 15,
      marginBottom: 0,
      marginTop: 10,
      paddingLeft: 10,
      width: '90%', 
      fontSize: 20
  },
})

const ShadowButtons = StyleSheet.create({
  ButtonMediumShadow: {
    ...Shadows.ButtonShadow,
    ...BasicButtons.ButtonMedium,
  }
})

const Buttons = {
  ...BasicButtons,
  ...ShadowButtons,
}

const Styles = {
  ...Buttons,
  ...Typography,
  ...Spacing,
  ...Layout,
}

export { Styles }