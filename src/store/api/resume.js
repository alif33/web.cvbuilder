import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Resume = createApi({
  reducerPath: 'Resume',
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.cvbuilder.pro/" }),
  tagTypes: ['resume'],
  endpoints: (builder) => ({
    getResumes: builder.query({
      query: () => "resumes",
      providesTags: ['resume']
    }),
  }),
})

export const { 
  useGetResumesQuery
} = Resume