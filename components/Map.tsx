"use client";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "100vh",
};

const center = {
    lat: 10.3521,
    lng: 123.9132,
};

const uscBounds = {
    north: 10.35526,
    south: 10.35038,
    east: 123.91574,
    west: 123.90216,
};

export default function Map() {
    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={17}
                options={{
                    restriction: {
                        latLngBounds: uscBounds,
                        strictBounds: false,
                    },
                    streetViewControl: false,
                    mapTypeControl: false,
                }}
            >
            </GoogleMap>
        </LoadScript>
    );
}
