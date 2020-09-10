import { StyleSheet } from 'react-native';

const StandardStyle = StyleSheet.create({
  borderRadius: {
    borderRadius: 5,
  },
  dropShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
} as StyleSheet.NamedStyles<StyleSheet.NamedStyles<any>>);

export default StandardStyle;
