
import React, { useEffect, useRef, useState } from 'react';

interface GoogleMapProps {
  center: { lat: number; lng: number };
  zoom?: number;
  markers?: Array<{
    lat: number;
    lng: number;
    title: string;
    info?: string;
  }>;
  className?: string;
}

const GoogleMap = ({ center, zoom = 13, markers = [], className = "" }: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if Google Maps is already loaded
    if (window.google && window.google.maps) {
      setIsLoaded(true);
      return;
    }

    // Load Google Maps API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => setIsLoaded(true);
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current || !isLoaded || !window.google) return;

    // Initialize the map
    const map = new google.maps.Map(mapRef.current, {
      center,
      zoom,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }]
        }
      ]
    });

    mapInstanceRef.current = map;

    // Add markers
    markers.forEach(marker => {
      const mapMarker = new google.maps.Marker({
        position: { lat: marker.lat, lng: marker.lng },
        map,
        title: marker.title,
      });

      if (marker.info) {
        const infoWindow = new google.maps.InfoWindow({
          content: marker.info
        });

        mapMarker.addListener('click', () => {
          infoWindow.open(map, mapMarker);
        });
      }
    });
  }, [center, zoom, markers, isLoaded]);

  if (!isLoaded) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-gray-100 ${className}`} style={{ minHeight: '300px' }}>
        <div className="text-gray-600">Loading map...</div>
      </div>
    );
  }

  return (
    <div 
      ref={mapRef} 
      className={`w-full h-full ${className}`}
      style={{ minHeight: '300px' }}
    />
  );
};

export default GoogleMap;
