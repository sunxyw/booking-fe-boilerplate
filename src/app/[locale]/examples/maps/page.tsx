'use client';

import { Map, useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';

const STARTING_POINT = { lat: 22.3275946, lng: 114.1887265 };
const ENDING_POINT = { lat: 22.3308781, lng: 114.1860671 };

export default function ExampleMapsPage() {
  const map = useMap();
  const routesLibrary = useMapsLibrary('routes');
  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService>();
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer>();

  // Initialize directions service and renderer
  useEffect(() => {
    if (!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map]);

  // Use directions service
  useEffect(() => {
    if (!directionsService || !directionsRenderer) {
      return () => {};
    }

    directionsService
      .route({
        origin: STARTING_POINT,
        destination: ENDING_POINT,
        travelMode: google.maps.TravelMode.WALKING,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
      });

    return () => {
      directionsRenderer.setMap(null);
    };
  }, [directionsService, directionsRenderer]);

  return (
    <Map
      defaultZoom={14}
      defaultCenter={STARTING_POINT}
      gestureHandling="greedy"
      disableDefaultUI
      style={{ width: '100%', height: '100vh' }}
    />
  );
}
