import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (searchQuery, page) => {
  const { data } = await axios(`search/photos`, {
    params: {
      query: searchQuery.trim(),
      hitsPerPage: 10,
      page,
    },
    headers: {
      Authorization: `Client-ID ${"QJAekgFluDVfNFCVtfKytJg0fEpct5jsiTspeNffzII"}`,
    },
  });
  console.log(data);
  return data;
};