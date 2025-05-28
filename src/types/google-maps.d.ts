
declare namespace google {
  namespace maps {
    class Map {
      constructor(element: HTMLElement, options: MapOptions);
    }

    interface MapOptions {
      center: LatLng | LatLngLiteral;
      zoom: number;
      styles?: MapTypeStyle[];
    }

    interface LatLng {
      lat(): number;
      lng(): number;
    }

    interface LatLngLiteral {
      lat: number;
      lng: number;
    }

    interface MapTypeStyle {
      featureType?: string;
      elementType?: string;
      stylers: MapTypeStyler[];
    }

    interface MapTypeStyler {
      visibility?: string;
    }

    class Marker {
      constructor(options: MarkerOptions);
      addListener(eventName: string, handler: () => void): void;
    }

    interface MarkerOptions {
      position: LatLng | LatLngLiteral;
      map: Map;
      title: string;
    }

    class InfoWindow {
      constructor(options: InfoWindowOptions);
      open(map: Map, anchor: Marker): void;
    }

    interface InfoWindowOptions {
      content: string;
    }
  }
}
