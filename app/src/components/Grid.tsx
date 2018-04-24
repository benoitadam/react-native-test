import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

const rows = [0, 1, 2, 3, 4, 5, 6, 7]
const cols = [0, 1, 2, 3, 4, 5, 6, 7]

const grid = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
]

const key = (row: number, col: number): number => row * 100 + col

export default class Grid extends React.Component<{}, {
  rows: number[],
  cols: number[],
  [key: number]: number
}> {
  constructor(props) {
    super(props)
    this.state = {
      rows,
      cols,
    }
    for(const row of rows) {
      for(const col of cols) {
        this.state[key(row, col)] = grid[row][col]
      }
    }
  }
  
  _onPressCell(row: number, col: number) {
    this.setState({
      [key(row, col)]: 2
    })
  }

  render() {
    const { state, state: { rows, cols } } = this
    return (
      <View style={styles.container}>
        {rows.map(row => (
          <View key={row} style={styles.row}>
            {cols.map(col => (
              <TouchableWithoutFeedback key={col} onPressIn={() => this._onPressCell(row, col)}>
                <View key={col} style={styles.cell}>
                  <Text>{state[key(row, col)]}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 100,
    width: 300,
    height: 300,
    borderWidth: 2
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
