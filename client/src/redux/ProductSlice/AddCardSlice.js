import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cardItem: [],
};
const AddCardSlice = createSlice({
  name: "AddCardSlice",
  initialState,
  reducers: {
    // set card.... avoid to duplicated
    setCard(state, action) {
      //find index...
      const itemIndex = state.cardItem.findIndex(
        (item) => item._id === action.payload._id
      );
      // index 1,2,3,4,5,5,7,.....
      if (itemIndex >= 0) {
        state.cardItem[itemIndex].cardQuantity += 1;
      }
      // index 0......
      else {
        const cardadd = { ...action.payload, cardQuantity: 1 };
        state.cardItem.push(cardadd);
      }
    },

    // set Card quantity
    setQuantity(state, action) {
      //find index...
      const itemIndex = state.cardItem.findIndex(
        (item) => item._id === action.payload.userId
      );
      const converttoInt = parseInt(action.payload.userQuantity);
      // index 1,2,3,4,5,5,7,.....
      if (itemIndex >= 0) {
        state.cardItem[itemIndex].cardQuantity =
          state.cardItem[itemIndex].cardQuantity + converttoInt;
      }
    },
  },
});

export const { setCard, setQuantity } = AddCardSlice.actions;
export default AddCardSlice.reducer;
