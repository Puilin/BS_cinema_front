import React from 'react';

const CommonTableColumn = ({ children }) => {
  return (
    
    <td width="100px"
    className="common-table-column"
    >
      {
        children
      }
    </td>
   
  )
}
 
export default CommonTableColumn;