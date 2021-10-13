import React, { useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  PixelRatio
} from 'react-native'
import LottieView from 'lottie-react-native';

const App = () => {
  const LottieRef = useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.lottieContainer}>
        <LottieView
          ref={LottieRef}
          source={require('./src/assets/8306-programming-animation.json')}
          loop={true}
          style={styles.lottieView}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => LottieRef.current.play()}
        >
          <Text style={styles.TextButton}>Start Animation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Button}
          onPress={() => LottieRef.current.reset()}
        >
          <Text style={styles.TextButton}>Stop Animation</Text>
        </TouchableOpacity>
      </View>
    </View >
  )
}

export default App;

const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
  },

  lottieView: {
    width: widthPercentageToDP('100%'),
    height: widthPercentageToDP('90%')
  },

  Button: {
    backgroundColor: "#50B9A6",
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 50,
    width: widthPercentageToDP('35%'),
    marginHorizontal: 10
  },


  lottieContainer: {
    width: widthPercentageToDP('90%'),
    height: '90%',
    justifyContent: 'center'
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  TextButton: {
    color: "#fff",
  }
});