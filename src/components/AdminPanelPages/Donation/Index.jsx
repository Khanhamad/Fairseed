import React from 'react'
import ReactTable from '../../Tabel/index'
import { useState } from 'react';

const Index = () => {
    const [selectedRowID, setSelectedRowID] = useState(null);
    const columns = React.useMemo(
        () => [
          {
            Header: "ID",
            accessor: "id",
            minWidth: 150,
            width: 600,
            
          },
          {
            Header: "Email",
            accessor: "title",
            minWidth: 150,
            width: 150,
            nofilter: true,
            
          },
          {
            Header: "username",
            accessor: "description",
            minWidth: 200,
            width: 280,
          
          },
          {
            Header: "mobile_number",
            accessor: "price",
            minWidth: 200,
            width: 280,
            nofilter: true,
            
          },
          // {
          //   Header: "city",
          //   accessor: "city",
          //   nofilter: true,
          //   minWidth: 200,
          //   width: 480,
          //   sortable: false,
          // },
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
      );
      // console.log('REACT_APP_API_URL:', process.env.REACT_APP_API_URL);
  return (
    <div>
      <ReactTable
      rows={[]}
      columns={columns}
       manualPagination
      title={"Donations"}
      url="/products"
      extraQuery={{ inactive: true }}
      //  addButton={<LocationConfigurationDialog />}
      selectedRowID={selectedRowID}
      />
    </div>
  )
}

export default Index
