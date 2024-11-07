// import { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { addColumn,addRow, removeColumn, removeRow } from '../redux/tableDataReducerAndAction';
function Table() {

//Get the data from the sore using useSelector Hooks
const rows = useSelector((state)=> state.table.rows);
const columns = useSelector((state)=> state.table.columns)

// Get the dispatcher
const dispatch =  useDispatch();

//previous sate value 
// const [rows, setRows] =useState([])
// const [columns , setColumns] = useState([]);

// It will add a new row to the table 
function handleAddRow(){
    // Create a new row with a unique ID
    const newRow = { id: rows.length + 1 }; 

    // Initialize each column field to an empty string
    columns.forEach(column => {
      newRow[column.field] = ''; 
    });

     // Use spread operator to add the new row
    // setRows([...rows, newRow]);
    dispatch(addRow([...rows, newRow]))
}

// It will add a new row to the table 
function handleAddColumn() {
    // create column id 
    const newColumnId = columns.length + 1;
    
    // create column field value
    const newField = `field${newColumnId}`;

    //create that new column
    const newColumn = { id: newColumnId, field: newField, title: `Column ${newColumnId}` };

    // Add new column to the columns array
    // setColumns([...columns, newColumn]);
    dispatch(addColumn([...columns, newColumn]))

    // Update each row to include the new column with an empty value
    // setRows(rows.map(row => ({ ...row, [newField]: '' })));
    dispatch(addRow(rows.map(row => ({ ...row, [newField]: '' }))))
  }

  // filter the row from the row array 
  function handelDeleteRow(row){
    const rowId = row.id;

    // setRows( row => row.filter(item => item.id !== rowId))
    dispatch(removeRow(rowId))
  }

  // filter the column from the column array 
  function handelDeleteColumn(column){
    const columnId = column?.id
    // setColumns(columns => columns.filter(item => item.id !== column.id))
    dispatch(removeColumn(columnId))
  }


  return (
      <div className="table">
          <div>
              <button onClick={handleAddRow}>Add Row</button>
              <button onClick={handleAddColumn}>Add Column</button>
          </div>
          <table className='table-style'>
              <thead>
                <tr>
                      {columns.map((column, index) => {
                          return <th
                              key={column.id}
                              id={column.field}
                          >
                              <button onClick={()=>{
                                handelDeleteColumn(column)
                              }}>-</button>
                          </th>
                      })}
                  </tr>
                  {/* <tr>
                      {columns.map((column, index) => {
                          return <th
                              key={column.id}
                              id={column.field}
                          >
                              {column.title}
                          </th>
                      })}
                  </tr> */}
              </thead>
              <tbody>
                  {rows.map(row => {
                      return <tr key={row.id}>
                          {
                              columns.map(column => {
                                  return <td
                                     contenteditable='true'
                                      key={column.id}
                                      >
                                        
                                      {row[column.field]}
                                  </td>
                              })
                          }
                          <td><button onClick={()=>{
                            handelDeleteRow(row)
                          }}>-</button></td>
                      </tr>
                  })}
              </tbody>

          </table>

      </div>
  );
}

export default Table;
