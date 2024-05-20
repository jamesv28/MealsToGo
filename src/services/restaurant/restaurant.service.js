import camelize from "camelize";
import { mocks, mockImages } from "./mock";

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((res, reject) => {
    const mock = mocks[location];
    if (!mock) reject("not found");
    res(mock);
  });
};

export const restaurantTransform = ({ results = [] }) => {
  const mapTheResults = results.map((res) => {
    res.photos = res.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...res,
      isOpenNow: res.opening_hours && res.opening_hours.open_now,
      isClosedTemporarily: res.buesiness_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mapTheResults);
};
