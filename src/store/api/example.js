import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Example = createApi({
  reducerPath: 'Example',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_URI }),
  tagTypes: ['examples'],
  endpoints: (builder) => ({

    getResumeExamples: builder.query({
        query: ()=> 'resume-examples',
        providesTags: ['examples']
    }),

    onResumeExample: builder.mutation({
        query: (data) => ({
            url: 'resume-example',
            method: 'POST',
            body: data,
        }),
        invalidatesTags: ['examples']
    }),

    // getPosts: builder.query({
    //   query: ()=> 'posts',
    //   providesTags: ['posts']
    // }),

    // onPost: builder.mutation({
    //     query: (data) => ({
    //         url: '/admin/post',
    //         method: 'POST',
    //         body: data,
    //     }),
    //     invalidatesTags: ['posts']
    // }),

    // updatePost: builder.mutation({
    //   query: (payload) => ({
    //       url: `/admin/post?id=${payload.id}`,
    //       method: 'PUT',
    //       body: payload.data,
    //   }),
    //   invalidatesTags: ['posts']
    // }),

    // deletePost: builder.mutation({
    //     query: (id) => ({
    //         url: `/admin/post?_id=${id}`,
    //         method: 'DELETE',
    //         body: {},
    //     }),
    //     invalidatesTags: ['posts']
    // }),

  })
})

export const { 
    useGetResumeExamplesQuery,
    useOnResumeExampleMutation
} = Example