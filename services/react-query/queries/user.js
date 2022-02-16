import { useQuery } from 'react-query';
import axios from 'axios';


/**
 *
 * @returns Deals with my request details api
 * Caching handled by react query
 */
export const GetUserDetails = () => {
  // const staffRequestService = ApiService.createInstance();
  // const userId = useStore(state => state.userId);
  // const { data } = await axios.get(
  //     "https://jsonplaceholder.typicode.com/posts"
  // );
  // return data;
  return useQuery(['UserDetails'], async () => {
    const response = await axios.get(
        "https://rickandmortyapi.com/api/character",
    );
    // console.log(data);
    return response.data;

    // const response: AxiosResponse = await staffRequestService.getCharacters();
    // return response.data;
  });
};
