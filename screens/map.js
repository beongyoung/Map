import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";

function App() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleMarkerPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 36.49828,
          longitude: 127.272631,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* 마커 표시 */}
        <Marker
          coordinate={{
            latitude: 36.49828,
            longitude: 127.272631,
          }}
          onPress={handleMarkerPress}
        />
      </MapView>

      {isModalVisible && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <View style={{ backgroundColor: "white", padding: 20 }}>
              <Text>마커를 클릭하셨습니다.</Text>
              <TouchableOpacity onPress={closeModal}>
                <Text>닫기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

export default App;
