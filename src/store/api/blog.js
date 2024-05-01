import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Blog = createApi({
  reducerPath: 'Blog',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_URI }),
  tagTypes: ['categories', 'posts'],
  endpoints: (builder) => ({

    getCategories: builder.query({
        query: ()=> 'categories',
        providesTags: ['categories']
    }),

    onCategory: builder.mutation({
        query: (data) => ({
            url: '/admin/category',
            method: 'POST',
            body: data,
        }),
        invalidatesTags: ['categories']
    }),

    getPosts: builder.query({
      query: ()=> 'posts',
      providesTags: ['posts']
    }),

    onPost: builder.mutation({
        query: (data) => ({
            url: '/admin/post',
            method: 'POST',
            body: data,
        }),
        invalidatesTags: ['posts']
    }),

    updatePost: builder.mutation({
      query: (payload) => ({
          url: `/admin/post?id=${payload.id}`,
          method: 'PUT',
          body: payload.data,
      }),
      invalidatesTags: ['posts']
    }),

    deletePost: builder.mutation({
        query: (id) => ({
            url: `/admin/post?_id=${id}`,
            method: 'DELETE',
            body: {},
        }),
        invalidatesTags: ['posts']
    }),

  })
})

export const { 
    useGetCategoriesQuery,
    useOnCategoryMutation,
    useGetPostsQuery,
    useOnPostMutation,
    useUpdatePostMutation,
    useDeletePostMutation
} = Blog