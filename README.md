# react-native-smooth-bottomsheet

A smooth react native bottom sheet 100% typeScript.

![Screenshot](https://github.com/AFDHAL2009/react-native-smooth-bottomsheet/blob/HEAD/Video.gif?raw=true)
![Screenshot](https://github.com/AFDHAL2009/react-native-smooth-bottomsheet/blob/HEAD/Screenshot.jpg?raw=true)

# Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Props](#Props)
- [Methods](#Methods)

<div id='Installation'/>

## Installation

```sh
npm install react-native-smooth-bottomsheet
```

<div id='Usage'/>

## Usage

```js
import BottomSheet from 'react-native-smooth-bottomsheet';

    <GestureHandlerRootView style={{flex: 1}}>
      <View>
        <BottomSheet ref={bottomRef} OnOpen={() => }>
          ..
          ..
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
```

<div id='Props'/>

## Props

<table>
<thead>
<tr>
<th>Prop Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>children</td>
<td>func or node</td>
<td><code>&lt;View /&gt;</code></td>
<td>A component or a render function. Use toggleSlider function instead</td>
</tr>
<tr>
<td>onOpen</td>
<td>function</td>
<td><code>() =&gt; null</code></td>
<td>Function to execute when the panel is opened</td>
</tr>

</tbody>
</table>

<div id='Methods'/>

## Methods

<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td> scrollTo: (destination: number) => void</td>
<td>Function to scroll the bottom sheet make destination as argument </td>
</tr>
<tr>
<td> isActive: () => boolean </td>
<td>Function return true if bootom sheet is active(destination!=0) else false (destination==0) </td>
</tr>

<tr>
<td> onClose: () => void </td>
<td>Function to close the bottom sheet </td>
</tr>
</tbody>
</table>

## Compatibility

- [Works with react-native-reanimated 3.0.2 ]
- Support FlatList
- Support ScrollView
- and more

Make sure to import them from react-native-gesture-handler

```js
import {
  GestureHandlerRootView,
  ScrollView,
  FlatList,
} from 'react-native-gesture-handler';
```

## Contributing

This library was created 100% javascript code en typescript. Feel free to contribute it.

## License

MIT

## Support

If you enjoyed this project — or just feeling generous, consider buying me a beer. Cheers!

## Author

Made by [Nejib Afdhal](https://github.com/AFDHAL2009)

---
