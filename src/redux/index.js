import { configureStore } from '@reduxjs/toolkit'
import { usersApi } from './usersApi'
import  usersReducer  from './usersSlice'

export const store = configureStore({

    reducer: {
        users: usersReducer,
        [usersApi.reducerPath]: usersApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(usersApi.middleware)
})