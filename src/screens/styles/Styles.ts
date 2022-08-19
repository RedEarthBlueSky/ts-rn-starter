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
    color: 'white',
    fontSize: 26,
  },
  H3: {
    color: 'white',
    fontSize: 20,
  },
})

const BasicButtons = StyleSheet.create({
  ButtonMedium: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'coral',
    borderRadius: 5,
    height: 40, 
    justifyContent: 'center',
    marginTop: 20,
    width: '60%', 
  },
  ButtonParent: {
    alignSelf: 'center',
    marginTop: 20,
    width: '60%',
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
}

export { Styles }