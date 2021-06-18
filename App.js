import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const xArr = [
  require('./assets/icons/X1.png'),
  require('./assets/icons/X2.png'),
  require('./assets/icons/X3.png')
];

const oArr = [
  require('./assets/icons/O1.png'),
  require('./assets/icons/O2.png'),
  require('./assets/icons/O3.png')
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: {
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
        8: null,
        9: null
      },
      player: 1,
      finished: false,
      winner: ""
    }
  }

  place(position) {
    let rand = Math.floor(Math.random() * 3);
    if (this.state.player === 1) {
      this.setState(prevState => ({
        board: {
          ...prevState.board,
          [position]: xArr[rand]
        }
      }))
    } else {
      this.setState(prevState => ({
        board: {
          ...prevState.board,
          [position]: oArr[rand]
        }
      }))
    }

    // this.checkWin(this.state.player);

    this.setState({player: this.state.player === 1 ? 2 : 1});

    console.log(this.state.board[1]);
  }

  // checkWin(currPlayer) {
  //   if ([1,2,3].includes(this.state.board[1]) <= 3 && [1,2,3].includes(this.state.board[2]) <= 3 && [1,2,3].includes(this.state.board[3]) <= 3 || [4,5,6].includes(this.state.board[1]) >= 3 && [4,5,6].includes(this.state.board[2]) >= 3 && [4,5,6].includes(this.state.board[3]) >= 3) { // Horizontal win
  //     this.setState({finished: true, winner: currPlayer});
  //   } else if ([1,2,3].includes(this.state.board[4]) <= 3 && [1,2,3].includes(this.state.board[5]) <= 3 && [1,2,3].includes(this.state.board[6]) <= 3 || [4,5,6].includes(this.state.board[4]) >= 3 && [4,5,6].includes(this.state.board[5]) >= 3 && [4,5,6].includes(this.state.board[6]) >= 3) {
  //     this.setState({finished: true, winner: currPlayer});
  //   } else if ([1,2,3].includes(this.state.board[7]) <= 3 && [1,2,3].includes(this.state.board[8]) <= 3 && [1,2,3].includes(this.state.board[9]) <= 3 || [4,5,6].includes(this.state.board[7]) >= 3 && [4,5,6].includes(this.state.board[8]) >= 3 && [4,5,6].includes(this.state.board[9]) >= 3) {
  //     this.setState({finished: true, winner: currPlayer});
  //   } else if ([1,2,3].includes(this.state.board[1]) <= 3 && [1,2,3].includes(this.state.board[4]) <= 3 && [1,2,3].includes(this.state.board[7]) <= 3 || [4,5,6].includes(this.state.board[1]) >= 3 && [4,5,6].includes(this.state.board[4]) >= 3 && [4,5,6].includes(this.state.board[7]) >= 3) { // Vertical win
  //     this.setState({finished: true, winner: currPlayer});
  //   } else if ([1,2,3].includes(this.state.board[2]) <= 3 && [1,2,3].includes(this.state.board[5]) <= 3 && [1,2,3].includes(this.state.board[8]) <= 3 || [4,5,6].includes(this.state.board[2]) >= 3 && [4,5,6].includes(this.state.board[5]) >= 3 && [4,5,6].includes(this.state.board[8]) >= 3) {
  //     this.setState({finished: true, winner: currPlayer});
  //   } else if ([1,2,3].includes(this.state.board[3]) <= 3 && [1,2,3].includes(this.state.board[6]) <= 3 && [1,2,3].includes(this.state.board[9]) <= 3 || [4,5,6].includes(this.state.board[3]) >= 3 && [4,5,6].includes(this.state.board[6]) >= 3 && [4,5,6].includes(this.state.board[9]) >= 3) {
  //     this.setState({finished: true, winner: currPlayer});
  //   } else if ([1,2,3].includes(this.state.board[1]) <= 3 && [1,2,3].includes(this.state.board[5]) <= 3 && [1,2,3].includes(this.state.board[9]) <= 3 || [4,5,6].includes(this.state.board[1]) >= 3 && [4,5,6].includes(this.state.board[5]) >= 3 && [4,5,6].includes(this.state.board[9]) >= 3) { // Diag win
  //     this.setState({finished: true, winner: currPlayer});
  //   } else if ([1,2,3].includes(this.state.board[3]) <= 3 && [1,2,3].includes(this.state.board[5]) <= 3 && [1,2,3].includes(this.state.board[7]) <= 3 || [4,5,6].includes(this.state.board[3]) >= 3 && [4,5,6].includes(this.state.board[5]) >= 3 && [4,5,6].includes(this.state.board[7]) >= 3) {
  //     this.setState({finished: true, winner: currPlayer});
  //   }
  // }

  render () {

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={{fontSize: 40}}>Player {this.state.player}'s ({this.state.player === 1 ? "X" : "O"}) turn:</Text>
        </View>
        <View style={styles.middle} >

          <Image source={require('./assets/board.png')} style={styles.board} />

          <View style={styles.boardSection}>
            <TouchableOpacity disabled={this.state.board[1] === null && !this.state.finished ? false : true} style={styles.square} onPress={() => this.place(1)} >
              <Image source={this.state.board[1]} style={styles.xo} />
            </TouchableOpacity>
            <TouchableOpacity disabled={this.state.board[2] === null && !this.state.finished ? false : true} style={styles.square} onPress={() => this.place(2)} >
              <Image source={this.state.board[2]} style={styles.xo} />
            </TouchableOpacity>
            <TouchableOpacity disabled={this.state.board[3] === null && !this.state.finished ? false : true} style={styles.square} onPress={() => this.place(3)} >
              <Image source={this.state.board[3]} style={styles.xo} />
            </TouchableOpacity>
          </View>

          <View style={styles.boardSection}>
            <TouchableOpacity disabled={this.state.board[4] === null && !this.state.finished ? false : true} style={styles.square} onPress={() => this.place(4)} >
              <Image source={this.state.board[4]} style={styles.xo} />
            </TouchableOpacity>
            <TouchableOpacity disabled={this.state.board[5] === null && !this.state.finished ? false : true} style={styles.square} onPress={() => this.place(5)} >
              <Image source={this.state.board[5]} style={styles.xo} />
            </TouchableOpacity>
            <TouchableOpacity disabled={this.state.board[6] === null && !this.state.finished ? false : true} style={styles.square} onPress={() => this.place(6)} >
              <Image source={this.state.board[6]} style={styles.xo} />
            </TouchableOpacity>
          </View>

          <View style={styles.boardSection}>
            <TouchableOpacity disabled={this.state.board[7] === null && !this.state.finished ? false : true} style={styles.square} onPress={() => this.place(7)} >
              <Image source={this.state.board[7]} style={styles.xo} />
            </TouchableOpacity>
            <TouchableOpacity disabled={this.state.board[8] === null && !this.state.finished ? false : true} style={styles.square} onPress={() => this.place(8)} >
              <Image source={this.state.board[8]} style={styles.xo} />
            </TouchableOpacity>
            <TouchableOpacity disabled={this.state.board[9] === null && !this.state.finished ? false : true} style={styles.square} onPress={() => this.place(9)} >
              <Image source={this.state.board[9]} style={styles.xo} />
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.bottom} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  middle: {
    flex: 3,
    height: '100%',
    width: '100%'
  },
  bottom: {
    flex: 1
  },
  board: {
    height: '100%',
    width: '100%',
    position: 'absolute'
  },
  boardSection: {
    flex: 1,
    flexDirection: 'row'
  },
  square: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  xo: {
    height: '75%',
    width: '75%'
  }
});
