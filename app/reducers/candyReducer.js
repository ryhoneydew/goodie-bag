import axios from 'axios';
const initialState = [];

const GET_ALL_CANDIES = 'GET_ALL_CANDIES';

const getAllCandiesFromServer = candies => ({
  type: GET_ALL_CANDIES,
  candies
});

export const fetchAllCandies = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/candies');
    dispatch(getAllCandiesFromServer(data));
  } catch (err) {
    console.log(err);
  }
};

const reducer = (candies = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CANDIES:
      return action.candies;
    default:
      return candies;
  }
};

export default reducer;
