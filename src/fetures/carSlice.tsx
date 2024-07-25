import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generateId } from "../utils/randomId";
import { generateRandomData } from "../utils/randonData";

export type CarState = {
  name: string;
  rut: string;
  carNumber: string;
  brand: string;
  model: string;
  color: string;
  price: number;
};

type CarStateWithId = CarState & {
  id: string;
};

const initialState: CarStateWithId[] = generateRandomData();

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    addNewCarToList: (state, action: PayloadAction<CarState>) => {
      const id = generateId();
      state.unshift({ id, ...action.payload });
      return state;
    },
    removeCarFromList: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
  },
});

export const { addNewCarToList, removeCarFromList } = carSlice.actions;

export default carSlice.reducer;
