import { createSlice } from "@reduxjs/toolkit";
export interface Data {
  userId: string;
  id: string;
  title: string;
  body: string;
}
interface DataState {
  data: Data[];
  loading: boolean;
  error: string | null;
}
const initialState: DataState = {
  data: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    fetchDataRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataRequest, fetchDataFailure, fetchDataSuccess } =
  dataSlice.actions;
export default dataSlice.reducer;
