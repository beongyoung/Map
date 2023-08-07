import React from "react";
import { WebView } from "react-native-webview";

const MapScreen = () => {
  const kakaoMapHTML = `
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=159ef546a4fa251bbd1bb59f5bcbf9ef"></script>
  </head>
  <body>
    <div id="map" style="width: 100%; height: 100vh;"></div>
    <script>
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(37.5665, 126.9780),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);
      // Add more map-related code here...
    </script>
  </body>
  </html>
  `;

  return <WebView source={{ html: kakaoMapHTML }} style={{ flex: 1 }} />;
};

export default MapScreen;
