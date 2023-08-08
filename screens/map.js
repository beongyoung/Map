import React from "react";
import { WebView } from "react-native-webview";

const MapScreen = () => {
  const kakaoMapHTML = `
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=159ef546a4fa251bbd1bb59f5bcbf9ef"></script>
    <style>
      #map {
        width: 500px;
        height: 400px;
      }

      .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.4);
      }

      .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        max-width: 600px;
      }

      .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
      }
      .close:hover,
      .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div id="map" style="width: 100%; height: 100vh;"></div>

    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>모달 내용</p>
      </div>
    </div>

    <script>
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(37.5665, 126.9780),
        level: 3
      };
      const map = new kakao.maps.Map(container, options);

      // 마커 추가 예시
      const markerPosition = new kakao.maps.LatLng(37.5665, 126.9780);
      const marker = new kakao.maps.Marker({
        position: markerPosition
      });
      marker.setMap(map);

      // 모달창
      const modal = document.getElementById('myModal');
      const span = document.getElementsByClassName('close')[0];

      // 마커 클릭 이벤트 리스너
      kakao.maps.event.addListener(marker, 'click', function() {
        modal.style.display = 'block';
      });

      // 모달창 닫기 이벤트 리스너
      span.onclick = function() {
        modal.style.display = 'none';
      };
    </script>
  </body>
</html>
  `;

  return <WebView source={{ html: kakaoMapHTML }} style={{ flex: 1 }} />;
};

export default MapScreen;
