import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

const columns = [
  {
    field: "_id",
    headerName: "#",
    flex: 0.6,
    headerAlign: "center",
    sortable: false,
  },
  {
    field: "categoryId",
    headerName: "Category",
    flex: 1.3,
    headerAlign: "center",
    valueGetter: (params) => params.row.categoryId.name,
  },
  {
    field: "brandId",
    headerName: "Brand",
    flex: 1.3,
    headerAlign: "center",
    valueGetter: (params) => params.row.brandId.name,
  },
  {
    field: "name",
    headerName: "Name",
    type: "number",
    flex: 1.3,
    headerAlign: "center",
    valueGetter: (params) => params.row.name,
 
    
  },
  {
    field: "quantity",
    headerName: "Stock",
    type: "number",
    flex: 1.3,
    headerAlign: "center",
    valueGetter: (params) => params.row.quantity,
  },
  {
    field: "age",
    headerName: "Actions",
    type: "number",
    flex: 1.3,
    headerAlign: "center",
  },
 
];



export default function ProductTable() {
  const { products } = useSelector((state) => state.stock);

  function getRowId(row) {
    return row._id
  }

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
      />
    </Box>
  );
}
