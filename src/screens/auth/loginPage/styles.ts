import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },

  registerContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  registerText: {
    fontSize: 18,
    marginHorizontal: 5,
  },
  registerLink: {
    fontSize: 18,
    color: '#4287f5',
    textDecorationLine: 'underline',
    textDecorationColor: '#4287f5',
    textDecorationStyle: 'solid',
  },
});
