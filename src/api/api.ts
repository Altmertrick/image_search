import axios from 'axios';

const publicKey1 = 'UpoLuieJoFaEX2CjVNDr71soH2PrSKWTJlrhvUd52o8';

export const getImages = async (term: string) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID UpoLuieJoFaEX2CjVNDr71soH2PrSKWTJlrhvUd52o8`,
    },
    params: {
      query: term,
    },
  });

  return response;
};
