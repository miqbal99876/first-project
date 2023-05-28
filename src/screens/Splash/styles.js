import { View, StyleSheet } from "react-native";
import { colors } from "../../config/colors";
import { mvs } from "../../config/metrices";


export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DEFAULT_WHITE,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    fontSize: mvs(24),
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
    marginTop: mvs(20),
  },

  login: {
    fontSize: mvs(24),
    fontWeight: 'bold',
    color: colors.DEFAULT_WHITE,
    textAlign: 'center',
    marginTop: mvs(20),
  },
  innercontainer: {
    backgroundColor: colors.black,
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 16,
  },
  innercontent: {
    backgroundColor: colors.DEFAULT_WHITE,
    flex: 1,
    marginTop: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: mvs(16)
  },
  title: {
    fontSize: mvs(24),
    fontWeight: 'bold',
    color: colors.black,
    marginTop: mvs(20),
  },
  subtitle: {
    fontSize: mvs(16),
    fontWeight: 'bold',
    color: colors.DEFAULT_GREY,

  },
});