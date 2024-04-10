import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios'; // Import axios

import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(() => import('react-leaflet').then((module) => module.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((module) => module.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((module) => module.Marker), { ssr: false });
const CircleMarker = dynamic(() => import('react-leaflet').then((module) => module.CircleMarker), { ssr: false });

function Map() {
  const [markers, setMarkers] = useState([]);
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/crowdsource/map/'); // Use axios.get for the HTTP request
        if (!response.data || !Array.isArray(response.data)) {
          throw new Error('Invalid map data format');
        }
        setMapData(response.data); 
      } catch (error) {
        console.error('Error fetching map data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (mapData) { 
      const leafletMarkers = mapData.map((marker) => (
        <Marker key={marker.latitude + marker.longitude} position={[marker.latitude, marker.longitude]}>
          <CircleMarker center={[marker.latitude, marker.longitude]} radius={marker.waterlevel / 2}>
          </CircleMarker>
        </Marker>
      ));
      setMarkers(leafletMarkers);
    }
  }, [mapData]);

  if (!mapData) {
    return <p>Loading map data...</p>;
  }

  return (
        <MapContainer 
          center={[19.2, 72.8]} 
          zoom={12.4}
          style={{ height: '50vh' }}
          minZoom={12.4}
          maxZoom={20}
          maxBounds={[
            [19.7, 72.4], 
            [18.85, 73.2]  
          ]}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers}
        </MapContainer>
  );
}

export default Map;
