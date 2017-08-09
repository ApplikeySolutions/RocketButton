import React, { Component, PropTypes } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'relative',
  },
  line: {
    position: 'absolute',
    borderRadius: 10,
  }
});

export default class CrossMarker extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.cross = false;
  }

  startAnimation(target) {
    Animated.timing(this.animatedValue,
      {
        toValue: target,
        duration: this.props.delay,
        easing: Easing.linear,
      }
    ).start();
  }

  toCross = () => {
    const { onMarkPress } = this.props;

    if (typeof onMarkPress === 'function') onMarkPress();
    this.startAnimation(1);
  }

  toMark = () => {
    const { onCrossPress } = this.props;

    if (typeof onCrossPress === 'function') onCrossPress();
    this.startAnimation(0);
  }

  changeMode = () => {
    this.cross ? this.toMark() : this.toCross();
    this.cross = !this.cross;
  }

  renderLine = (angle, offset) => {
    const { color, height, width } = this.props;

    return <Animated.View
      style={[
        styles.line,
        {
          backgroundColor: color,
          height,
          width,
          transform: [
            { rotateZ: angle },
          ],
          left: offset,
        }
      ]}
    />
  }

  render () {
    const { height, width } = this.props,
      origin = {
        x: height,
        y: height / 2,
      }

    const leftLinePos = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [origin.x - height / 3, origin.x]
    });

    const rightLinePos = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [origin.x + height / 3, origin.x]
    });

    return <TouchableWithoutFeedback onPress={this.changeMode} >
      <View style={[styles.container, { height, width: height * 2 } ]}>
        {this.renderLine('-45 deg', leftLinePos)}
        {this.renderLine('45 deg', rightLinePos)}
      </View>
    </TouchableWithoutFeedback>
  }
}

CrossMarker.propTypes = {
  color: PropTypes.string,
  delay: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  onCrossPress: PropTypes.func,
  onMarkPress: PropTypes.func,
  onCrossTransformed: PropTypes.func,
  onMarkTransformed: PropTypes.func,
}

CrossMarker.defaultProps = {
  color: '#000',
  delay: 500,
  height: 30,
  width: 4,
  onCrossPress: () => {},
  onMarkPress: () => {},
}
