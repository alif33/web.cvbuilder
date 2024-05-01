import { informationSlice } from "./slice";
const { actions: slice } = informationSlice;

export const setInfo = info => (dispatch) => {
    dispatch(slice.setInfo(info));
}
