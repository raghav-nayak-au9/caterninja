import axios from "axios";

export const cityData = async (value) => {
  return await axios.post("http://localhost:4000/api/v1/cityData", value);
};

export const mealData = async (value1, value2) => {
  return await axios.post(
    "http://localhost:4000/api/v1/mealData",
    value1,
    value2
  );
};

export const cuisineData = async (value1, value2, value3) => {
  return await axios.post(
    "http://localhost:4000/api/v1/cuisineData",
    value1,
    value2,
    value3
  );
};

export const starterData = async () => {
  return await axios
    .get("http://localhost:4000/api/v1/starterData")
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
};
