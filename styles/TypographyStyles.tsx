import { StyleSheet } from 'react-native';
import { BRAND_PRIMARY, GRAY_80 } from './ColorStyles';

export default StyleSheet.create({
  screenHeader: {
    fontSize: 24,
    color: BRAND_PRIMARY,
    marginBottom: 40,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: GRAY_80,
    marginBottom: 10,
  },
});
