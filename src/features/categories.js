import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = ["Characters", "Episodes", "Locations"]

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: { value: initialStateValue},
    reducers: {

    }
})

export default categoriesSlice.reducer