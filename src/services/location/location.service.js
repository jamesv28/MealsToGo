import camelize from "camelize";

import { locations } from "./location.mock";

export const locationService = (searchTerm) => {
  return new Promise((res, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) reject("location not found");
    res(locationMock);
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
