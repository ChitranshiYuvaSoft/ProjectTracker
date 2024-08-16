import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";

const SearchMap = () => {
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => {
    setAutocomplete(autoC);
  };

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
    }
  };

  return (
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
      <input
        type="text"
        placeholder="Search a place"
        className="inputData"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          fontSize: `16px`,
          outline: `none`,
          textOverflow: `ellipsis`,
        }}
      />
    </Autocomplete>
  );
};

export default SearchMap;
