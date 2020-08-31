import {Platform, StyleSheet, Dimensions} from "react-native"

const styles = StyleSheet.create({
container: {
  flex: 1
},
item: {
  flex: (1 / 3),
  margin: 3,
  height: 180,
  flexDirection: 'column'
},
cellImage: {
  height: 160
},
textStyle: {
  fontWeight: 'bold',
  textAlign: 'left',
  flex: 1
},
favoriteImage: {
  alignContent: 'flex-end',
  width: 20,
  height: 20
},
detailContainer: {
  flex: 1,
  flexDirection: 'column', 
  alignItems: 'center'
}
});

export default styles