import axios from 'axios';
import { ImageT } from '../types/types';

const publicKey1 = 'UpoLuieJoFaEX2CjVNDr71soH2PrSKWTJlrhvUd52o8';

type ResponseDataT = {};

export const getImages = async (
  term: string,
  page: number = 1,
  per_page: number = 10
) => {
  return await axios
    .get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: `Client-ID UpoLuieJoFaEX2CjVNDr71soH2PrSKWTJlrhvUd52o8`,
      },
      params: {
        query: term,
        page,
        per_page,
      },
    })
    .then((res) => res.data.results as Array<ImageT>);
};
