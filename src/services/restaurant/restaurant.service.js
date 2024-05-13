import camelize from "camelize";
import { mocks } from "./mock";

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((res, reject) => {
    const mock = mocks[location];
    if (!mock) reject("not found");
    res(mock);
  });
};

export const transformTheData = ({ results = [] }) => {
  const mapTheResults = results.map((res) => {
    return {
      ...res,
      isOpenNow: res.opening_hours && res.opening_hours.open_now,
      isClosedTemporarily: res.buesiness_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mapTheResults);
};
