import { createSlice } from '@reduxjs/toolkit'

export const tableSlice = createSlice({
  name: 'table',
  initialState: {
    rows: [
      {
          "id": 1,
          "field1": "",
          "field2": "",
          "field3": "",
          "field4": "",
          "field5": "",
          "field6": "",
          "field7": "",
          "field8": ""
      },
      {
          "id": 2,
          "field1": "",
          "field2": "",
          "field3": "",
          "field4": "",
          "field5": "",
          "field6": "",
          "field7": "",
          "field8": ""
      },
      {
          "id": 3,
          "field1": "",
          "field2": "",
          "field3": "",
          "field4": "",
          "field5": "",
          "field6": "",
          "field7": "",
          "field8": ""
      },
      {
          "id": 4,
          "field1": "",
          "field2": "",
          "field3": "",
          "field4": "",
          "field5": "",
          "field6": "",
          "field7": "",
          "field8": ""
      },
      {
          "id": 5,
          "field1": "",
          "field2": "",
          "field3": "",
          "field4": "",
          "field5": "",
          "field6": "",
          "field7": "",
          "field8": ""
      }
  ],
    columns: [
      {
          "id": 1,
          "field": "field1",
          "title": "Column 1"
      },
      {
          "id": 2,
          "field": "field2",
          "title": "Column 2"
      },
      {
          "id": 3,
          "field": "field3",
          "title": "Column 3"
      },
      {
          "id": 4,
          "field": "field4",
          "title": "Column 4"
      },
      {
          "id": 5,
          "field": "field5",
          "title": "Column 5"
      },
      {
          "id": 6,
          "field": "field6",
          "title": "Column 6"
      },
      {
          "id": 7,
          "field": "field7",
          "title": "Column 7"
      },
      {
          "id": 8,
          "field": "field8",
          "title": "Column 8"
      }
  ]
    
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