import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import BottomSheet from 'qh-rn-bottom-sheet';

function App(): React.JSX.Element {
  const [bottomSheet, setBottomSheet] = useState(false);
  return (
    <View style={styles.main}>
      <Button title="Open" onPress={() => setBottomSheet(true)} />
      {bottomSheet ? (
        <BottomSheet close={() => setBottomSheet(false)} title="Options">
          <View style={styles.list}>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>Option 1</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>Option 2</Text>
            </View>
          </View>
        </BottomSheet>
      ) : null}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  list: {},
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
  },
  listItemText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    padding: 16,
    paddingLeft: 12,
  },
  icon: {width: 24, height: 24},
});
