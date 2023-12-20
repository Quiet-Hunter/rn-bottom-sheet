import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import BottomSheet from './src/BottomSheet';
const photoIcon = require('./src/photo.png');
const galleryIcon = require('./src/gallery.png');

function App(): React.JSX.Element {
  const [bottomSheet, setBottomSheet] = useState(false);
  return (
    <View style={styles.main}>
      <Button title="Open" onPress={() => setBottomSheet(true)} />
      {bottomSheet ? (
        <BottomSheet close={() => setBottomSheet(false)}>
          <View style={styles.list}>
            <View style={styles.listItem}>
              <Image source={photoIcon} style={styles.icon} />
              <Text style={styles.listItemText}>Take a picture</Text>
            </View>
            <View style={styles.listItem}>
              <Image source={galleryIcon} style={styles.icon} />
              <Text style={styles.listItemText}>Choose from a gallery</Text>
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
