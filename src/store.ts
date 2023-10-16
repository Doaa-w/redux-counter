import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice"


export type RootState ={
    counterRe: ReturnType<typeof counterSlice>;
}

export const store = configureStore({
reducer:{
    counterRe:counterSlice
}
});
export default store;