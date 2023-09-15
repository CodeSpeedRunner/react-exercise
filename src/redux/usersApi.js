import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl  = `https://api.github.com/`;

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({

        getUsers: builder.query({
            query: (search) => ({
                url: `search/users`,
                params: {
                    q: search,
                    per_page: 10
                }
            }),
        }),

        getRepositoriess: builder.query({
            query: (user) => ({
                url: `users/${user}/repos`
            }),
        }),
    }),
})

export const { 
    useGetUsersQuery,
    useGetRepositoriessQuery,
} = usersApi;