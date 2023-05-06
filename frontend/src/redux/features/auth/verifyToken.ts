import { apiSlice } from "../../app/api/apiSlice";

export const verifyTokenApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        verifyToken: builder.mutation({
            query: credentials => ({
                url: 'auth/jwt/verify/',
                method: 'POST',
                body: {...credentials }
            })
        }),
    })
})

export const {
    useVerifyTokenMutation
} = verifyTokenApiSlice;