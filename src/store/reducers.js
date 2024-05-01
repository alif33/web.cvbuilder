import { combineReducers } from "@reduxjs/toolkit"
import { Blog, Example, Information, Resume } from "./api"
import { informationSlice } from "./information/slice"
import { sampleSlice } from "./sample/slice"

export const rootReducer = combineReducers({
  [Blog.reducerPath]: Blog.reducer,
  [Example.reducerPath]: Example.reducer,
  [Information.reducerPath]: Information.reducer,
  [Resume.reducerPath]: Resume.reducer,
  information: informationSlice.reducer,
  sample: sampleSlice.reducer,
})