import axios from "axios";

export const fetchCurrency = async () => {
  try {
    const { data } = await axios.get(`https://api.monobank.ua/bank/currency`);
    return data.slice(0, 3);
  } catch (error) {
    console.error(error.message);
    return null;
  }
};
