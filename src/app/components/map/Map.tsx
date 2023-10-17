import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useData } from '../../contexts/data';

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <MapKit/>;
  
  function MapKit(){
    const center = useMemo(() => ({ lat: 49.408276, lng: 1.240513 }), []);
    const data = useData();
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="max-w-[800px] w-full h-[400px] rounded-xl mx-auto" options={{ disableDefaultUI: true }}>
        {data.profile.memoji&&<Marker position={center} icon={{url: data.profile.memoji, scaledSize: new window.google.maps.Size(80, 80),}}/>}
    </GoogleMap>
  );
  }
}
