import axios from "axios";

const fetchData = async (year, selectedMonth) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzgxMjE3ZjE4NWMwNDhhMjgyN2Q2OSIsImlhdCI6MTY4MTQ5MjU2NywiZXhwIjoxNjgxNTc4OTY3fQ.eJlfAKWWFKlsUt_RTK6A3J0vUgRS4FAvyxWuQM32--k";
  try {
    const response = await axios.get(
      `http://localhost:3030/api/statistics?year=${year}&month=${selectedMonth}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;
