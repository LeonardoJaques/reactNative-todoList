import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#404040',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginRight: 10,
    paddingLeft: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titles: {
    fontSize: 20,
    color: 'white',
    marginRight: 5,
  },
  time: {
    color: 'darkgray',
  },
});

export default styles;
