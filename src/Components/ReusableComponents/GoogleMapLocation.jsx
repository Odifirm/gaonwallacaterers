import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Maplocation from "../../assets/Data/Maplocation.json";
const GoogleMapLocation = () => {
  return (
    // <LoadScript googleMapsApiKey="YOUR_API_KEY">
    //   <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
    //     {/* Add a marker */}
    //     <Marker position={center} />
    //   </GoogleMap>
    // </LoadScript>

    <div style={{ width: "100%", height: "400px" }}>
      {Maplocation.map((location) => (
        <iframe
          key={location.maplocationId} // Unique key for each map
          src={location.maplocation}
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map ${location.maplocationId}`}
        ></iframe>
      ))}
    </div>
  );
};

export default GoogleMapLocation;
