import { createSlice } from '@reduxjs/toolkit'

export const tableSlice = createSlice({
  name: 'table',
  initialState: {
    rows: [],
    columns: []
  },
  reducers: {
    addRow: (state , action) => {
        state.rows =  action.payload
    },
    addColumn: (state , action) => {
        state.columns = action.payload;
    },
    removeColumn: (state, action) => {
        state.columns = state.columns.filter(item => item.id !== action.payload)
    },
    removeRow:(state ,action) =>{
        state.rows =  state.rows.filter(item => item.id !== action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addRow, addColumn, removeColumn, removeRow } = tableSlice.actions

export default tableSlice.reducer