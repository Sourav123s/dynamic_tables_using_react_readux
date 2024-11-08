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
    },
    updateCellValue:(state ,action) =>{
      state.rows = state.rows.map(row => 
        row.id === action.payload.rowId
        ? { ...row, [action.payload.field]:action.payload.value }
        : row
      )
    }
  },
})

// Action creators are generated for each case reducer function
export const { addRow, addColumn, removeColumn, removeRow , updateCellValue } = tableSlice.actions

export default tableSlice.reducer