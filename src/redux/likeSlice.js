import {createSlice, nanoid} from '@reduxjs/toolkit';
export const likeSlice = createSlice({
  name: 'bookmark',
  initialState: [],
  reducers: {
    addToLike: (state, action) => {
      const newToLike = {
        id: nanoid(),
        name: action.payload.name,
        ingredients: action.payload.ingredients,
        price: action.payload.price,
        image: action.payload.image,
        title: action.payload.title,
        count:action.payload.count,
      };
      state.push(newToLike);
    },
    deleteLike: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});
export const {addToLike, deleteLike} = likeSlice.actions;
export default likeSlice.reducer;