import {Dimensions, PixelRatio} from 'react-native';

export const widthPercentage = width => {
  const screenWidth = Dimensions.get('window').width;
  const elementWidth = parseFloat(width);
  return PixelRatio.roundToNearestPixel((screenWidth * elementWidth) / 100);
};

export const heightPercentage = height => {
  const screenHeight = Dimensions.get('window').height;
  const elementHeight = parseFloat(height);
  return PixelRatio.roundToNearestPixel((screenHeight * elementHeight) / 100);
};
