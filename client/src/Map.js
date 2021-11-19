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
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
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
    <>
      <Search
        adjustAddress={adjustAddress}
        changeLongLat={changeLongLat}
        hideMap={hideMap}
      />
      <GoogleMap
        mapContainerStyle={{
          height: "300px",
          marginTop: "3rem",
          marginBottom: "3rem",
          width: "100%",
        }}
        center={center}
        zoom={20}
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
    </>
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
    <div style={{ height: "120px", width: "100%" }}>
      <button
        onClick={() => hideMap()}
        className="btn"
        style={{ marginTop: "1rem" }}
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
            width: "500px",
            marginTop: "2rem",
            height: "2rem",
            backgroundColor: "white",
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
            padding: "20px",
            width: "467px",
            display: "grid",
            cursor: "pointer",
            backgroundColor: "white",
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
