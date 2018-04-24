import main from './src/containers/Main'

export default main


// import * as React from 'react';
// import { StyleSheet, Text, View, Dimensions, ScaledSize, TouchableWithoutFeedback } from 'react-native';

// const grid = [
//   [1, 2, 3, 0, 0, 0, 7, 8, 9],
//   [4, 5, 6, 0, 0, 0, 1, 2, 3],
//   [7, 8, 9, 0, 0, 0, 4, 5, 6],
//   [2, 3, 4, 0, 0, 0, 8, 9, 1],
//   [5, 6, 7, 0, 0, 0, 2, 3, 4],
//   [8, 9, 1, 0, 0, 0, 5, 6, 7],
//   [3, 4, 5, 0, 0, 0, 9, 1, 2],
//   [6, 7, 8, 0, 0, 0, 3, 4, 5],
//   [9, 1, 2, 0, 0, 0, 6, 7, 8],
// ];

// interface P {  }

// interface S {
//   grid: number[][]
//   size: number
// }

// export default class App extends React.Component<P, S> {

//   constructor(props: P) {
//     super(props)

//     console.log('App constructor')
    
//     this.state = {
//       grid: grid,
//       size: this.getSize()
//     }
//   }

//   componentWillMount() {
//     Dimensions.addEventListener('change', this._onScreenChange);
//   }

//   componentWillUnmount() {
//     Dimensions.removeEventListener('change', this._onScreenChange)
//   }

//   getSize(screen?: ScaledSize) {
//     if (screen === undefined) {
//       screen = Dimensions.get('screen')
//     }
//     let size = screen.width > screen.height ? screen.height - 30 : screen.width
//     return size / 9
//   }

//   _onScreenChange = ({ window, screen }: { window: ScaledSize, screen: ScaledSize }) => {
//     this.setState({ size: this.getSize(screen) })
//   }

//   _onPressCell = (rowIndex, cellIndex) => {
//     console.log('onPress', rowIndex, cellIndex)
//     const grid = this.state.grid
//     grid[rowIndex][cellIndex] = 1
//     this.setState(({ grid }) => {
      
//       return { grid }
//     })
//   }

//   render() {
//     const { grid, size } = this.state
    
//     return (
//       <View style={styles.container}>
//         {grid.map(
//           (row, rowIndex) => row.map(
//             (cell, cellIndex) => (
//               <TouchableWithoutFeedback key={[rowIndex, cellIndex].join()} onPressIn={() => this._onPressCell(rowIndex, cellIndex)}>
//                 <View style={[styles.cell, {
//                   top: size * rowIndex,
//                   left: size * cellIndex,
//                   height: size,
//                   width: size,
//                   borderTopWidth: rowIndex === 0 ? 3 : 0,
//                   borderLeftWidth: cellIndex === 0 ? 3 : 0,
//                   borderBottomWidth: rowIndex % 3 === 2 ? 3 : 1,
//                   borderRightWidth: cellIndex % 3 === 2 ? 3 : 1,
//                 }]}>
//                   {cell !== 0 && <Text style={styles.value}>{cell}</Text>}
//                 </View>
//               </TouchableWithoutFeedback>
//             )
//           )
//         )}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 30
//   },
//   parcel: {
//     position: 'absolute',
//     borderColor: 'black',
//   },
//   cell: {
//     position: 'absolute',
//     borderColor: 'grey',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   value: {
//     fontSize: 28
//   }
// })