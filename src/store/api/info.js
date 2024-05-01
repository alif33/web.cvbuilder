import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Information = createApi({
  reducerPath: 'Information',
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.cvbuilder.pro/" }),
  tagTypes: ['info'],
  endpoints: (builder) => ({
    getInformation: builder.query({
      query: (__) => __? `?_id=${__}`: "dummy",
      providesTags: ['info']
    }),
  }),
})

export const { 
  useGetInformationQuery
} = Information