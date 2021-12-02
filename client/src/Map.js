import React, { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxOption,
} from "@reach/combobox";

const Map = ({ adjustAddress, hideMap, address }) => {
  const libraries = ["places"];
  const [center, setCenter] = useState({
    lat: 33.66196255264221,
    lng: -112.00027975747798,
  });
  const changeLongLat = (obj) => {
    setCenter(obj);
  };
  const key = process.env.REACT_APP_API_KEY;

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: key,
    libraries,
  });
  return isLoaded ? (
    <div
      style={{
        width: "100%",
        // border: "0.2rem solid red",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingLeft: "4rem",
        minHeight: "350px",
      }}
    >
      <Search
        adjustAddress={adjustAddress}
        changeLongLat={changeLongLat}
        hideMap={hideMap}
      />
      <GoogleMap
        mapContainerStyle={{
          minHeight: "300px",
          marginTop: "3rem",
          marginBottom: "3rem",
          width: "80%",
        }}
        center={center}
        zoom={10}
      >
        <Marker position={{ lat: center.lat, lng: center.lng }}></Marker>
        {address.length && (
          <InfoWindow position={{ lat: center.lat, lng: center.lng }}>
            <div style={{ marginTop: "1rem", width: "8rem" }}>
              <h6>{address}</h6>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default Map;

function Search({ changeLongLat, adjustAddress, hideMap }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    radius: 200 * 1000,
    location: { lat: () => 33.66196255264221, long: () => -112.00027975747798 },
  });
  return (
    <div
      style={{
        minHeight: "120px",
        width: "100%",
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <button
        onClick={() => hideMap()}
        className="btn"
        style={{ marginTop: "1rem", marginRight: "7rem" }}
      >
        Confirm
      </button>
      <Combobox
        onSelect={async (address) => {
          adjustAddress(address);
          setValue(address, false);
          clearSuggestions();
          try {
            let result = await getGeocode({ address });
            const { lat, lng } = await getLatLng(result[0]);
            changeLongLat({ lat, lng });
          } catch (error) {
            console.log("error");
          }
        }}
      >
        <ComboboxInput
          style={{
            width: "50%",
            marginTop: "2rem",
            height: "2rem",
            backgroundColor: "white",
            marginRight: "7rem",
          }}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeHolder={"Enter your adress"}
        ></ComboboxInput>
        <ComboboxPopover
          style={{
            cursor: "pointer",
            backgroundColor: "white",
            height: "auto",
          }}
        >
          {status === "OK" &&
            data.map((item, index) => {
              return <ComboboxOption value={item.description} key={index} />;
            })}
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
