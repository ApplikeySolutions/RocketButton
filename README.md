Made by [Applikey Solutions](https://applikeysolutions.com)

![rocket](https://user-images.githubusercontent.com/10288457/29079755-b0809b58-7c66-11e7-8a68-004ccb227e5f.gif)

# react-native-animated-check-mark

# Table of Contents
1. [Purpose](#purpose)
2. [Supported Platforms](#supported-platforms)
3. [Installation](#installation)
4. [Basic Usage](#basic-usage)
5. [Properties](#properties)
6. [Demo](#demo)
7. [Release Notes](#release-notes)
8. [Contact Us](#contact-us)
9. [License](#license)

# Purpose
A small react component for animated cross-mark transformation.

# Supported Platforms

* iOS
* Android

# Installation

```bash
$ npm i react-native-animated-check-mark --save
```

# Basic Usage

- Install `react-native` first

```bash
$ npm i react-native -g
```

- Initialization of a react-native project

```bash
$ react-native init myproject
```

- Then, edit `myproject/index.ios.js`, like this:

```jsx
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

import CrossMarker from 'react-native-animated-check-mark';

export default class myproject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <CrossMarker />
          <CrossMarker
            height={50}
            width={5}
            color={'green'}
            delay={300}
            onMarkPress={() => console.log('To Cross')}
            onCrossPress={() => console.log('To Mark')}
          />
          <CrossMarker height={70} width={6} color={'red'} delay={1000} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('myproject', () => myproject);
```

# Demo

![dropdown](https://user-images.githubusercontent.com/10288457/29079761-b4d590e6-7c66-11e7-8357-0ac6a642d523.gif)

# Properties

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| color | #000 | `string` | Set the color of lines |
| delay | 500 | `number` | Set the duration of transform (milliseconds) |
| height | 30 | `number` | Set the line height |
| width | 4 | `number` | Set the line width |
| onCrossPress | - | `function` | fires, when component in cross mode is tapped |
| onMarkPress | - | `function` | fires, when component in mark mode is tapped |

# Release Notes

Version 0.0.2

- Release version.

# Contact Us

You can always contact us via github@applikey.biz We are open for any inquiries regarding our libraries and controls, new open-source projects and other ways of contributing to the community. If you have used our component in your project we would be extremely happy if you write us your feedback and let us know about it!

# License

The MIT License (MIT)

Copyright © 2017 Applikey Solutions

Permission is hereby granted free of charge to any person obtaining a copy of this software and associated documentation files (the "Software") to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
