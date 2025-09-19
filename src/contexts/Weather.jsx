import { createContext, useContext, useReducer, useState } from "react";
import { precipitation, temperature, wind } from "../utils/data";

const WeatherContext = createContext();

const initialState = {
  location: {
    country: "",
    longitude: "",
    latitude: "",
    name: "",
  },
  searchValue: "",
  searchModal: null,
  unitChange: true,
  unit: "Imperial",
  temp: temperature,
  windSpeed: wind,
  Precipitation: precipitation,
  currentDay: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "input/name": {
      return {
        ...state,
        searchValue: action.payload,
        searchModal: true,
      };
    }
    case "temp/change": {
      return {
        ...state,
        temp: state.temp.map((data, index) => {
          if (index === action.payload) {
            return {
              ...data,
              isChecked: true,
            };
          } else {
            return {
              ...data,
              isChecked: false,
            };
          }
        }),
      };
    }
    case "windSpeed/change": {
      return {
        ...state,
        windSpeed: state.windSpeed.map((data, index) => {
          if (index === action.payload) {
            return {
              ...data,
              isChecked: true,
            };
          } else {
            return {
              ...data,
              isChecked: false,
            };
          }
        }),
      };
    }
    case "prep/change": {
      return {
        ...state,
        Precipitation: state.Precipitation.map((data, index) => {
          if (index === action.payload) {
            return {
              ...data,
              isChecked: true,
            };
          } else {
            return {
              ...data,
              isChecked: false,
            };
          }
        }),
      };
    }
    case "unit/change": {
      return {
        ...state,
        unitChange: !state.unitChange,
        unit: state.unitChange ? "Imperial" : "Metric",
        temp:
          state.unit === "Imperial"
            ? state.temp.map((data) => {
                if (data.name === "Fahrenheit (°F)") {
                  return {
                    ...data,
                    isChecked: true,
                  };
                } else {
                  return {
                    ...data,
                    isChecked: false,
                  };
                }
              })
            : state.temp.map((data) => {
                if (data.name === "Celsius (°C)") {
                  return {
                    ...data,
                    isChecked: true,
                  };
                } else {
                  return {
                    ...data,
                    isChecked: false,
                  };
                }
              }),
        windSpeed:
          state.unit === "Imperial"
            ? state.windSpeed.map((data) => {
                if (data.name === "mph") {
                  return {
                    ...data,
                    isChecked: true,
                  };
                } else {
                  return {
                    ...data,
                    isChecked: false,
                  };
                }
              })
            : state.windSpeed.map((data) => {
                if (data.name === "km/h") {
                  return {
                    ...data,
                    isChecked: true,
                  };
                } else {
                  return {
                    ...data,
                    isChecked: false,
                  };
                }
              }),
        Precipitation:
          state.unit === "Imperial"
            ? state.Precipitation.map((data) => {
                if (data.name === "Inches (in)") {
                  return {
                    ...data,
                    isChecked: true,
                  };
                } else {
                  return {
                    ...data,
                    isChecked: false,
                  };
                }
              })
            : state.Precipitation.map((data) => {
                if (data.name === "Millimeters (mm)") {
                  return {
                    ...data,
                    isChecked: true,
                  };
                } else {
                  return {
                    ...data,
                    isChecked: false,
                  };
                }
              }),
      };
    }
    case "change/Day": {
      return {
        ...state,
        currentDay: action.payload,
      };
    }
    case "search/location": {
      return {
        ...state,
        location: action.payload,
        searchModal: false,
      };
    }
    case "clear/search": {
      return {
        ...state,
        searchValue: "",
        searchModal: false,
      };
    }
  }
}

function Weather({ children }) {
  const [
    {
      location,
      searchValue,
      searchModal,
      temp,
      windSpeed,
      Precipitation,
      unit,
      currentDay,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const [countryName, setCountryName] = useState(searchValue);
  const [data, setData] = useState([]);
  const [enabled, setEnabled] = useState(false);
  const [enableLocationSearch, setEnableLocationSearch] = useState(false);
  return (
    <WeatherContext.Provider
      value={{
        countryName,
        setCountryName,
        windSpeed,
        searchModal,
        temp,
        location,
        Precipitation,
        unit,
        currentDay,
        searchValue,
        data,
        setData,
        enabled,
        setEnabled,
        enableLocationSearch,
        setEnableLocationSearch,
        dispatch,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

function useWeather() {
  const context = useContext(WeatherContext);
  if (context === undefined)
    throw new Error("Context was used outside Parent Context");

  return context;
}

export { Weather, useWeather };
