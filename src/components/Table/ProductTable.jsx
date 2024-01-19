import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import useStock from "../../service/useStock";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"

export default function PurchasesTable() {
  const { products } = useSelector((state) => state.stock);
  const { deleteStock } = useStock();
  const getRowId = (row) => row._id;

  const columns = [
    {
      field: "_id",
      headerName: "#",
      flex: 0.6,
      minWidth: "150px",
      headerAlign: "center",
      align: "center",
      sortable: false,
      valueGetter: (params) =>{ params.value.slice(-4)}

  
    },
    {
      field: "categoryId",
      headerName: "Category",
      flex: 1.3,
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header',
      valueGetter: (params) => params.row?.categoryId?.name,
     
    },
    {
      field: "brandId",
      headerName: "Brand",
      flex: 1.3,
      headerAlign: "center",
      headerClassName: 'super-app-theme--header',
      align: "center",
      valueGetter: (params) => params.row?.brandId?.name,
    },
    {
      field: "name",
      headerName: "Name",
      type: "number",
      flex: 1.3,
      headerAlign: "center",
      headerClassName: 'super-app-theme--header',
      align: "center",
    },
    {
      field: "quantity",
      headerName: "Stock",
      type: "number",
      flex: 1.3,
      headerAlign: "center",
      headerClassName: 'super-app-theme--header',
      align: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      flex: 1.3,
      align: "center",
      headerAlign: "center",
      headerClassName: 'super-app-theme--header',
      getActions: (props) => [
        <GridActionsCellItem
          icon={<DeleteForeverIcon />}
          onClick={() => deleteStock("products", props.id)}
          label="Delete"
          sx={{"&:hover": { color: "red" }}}
        />,
      ],
    },
  ];

  return (
    <Box sx={{ width: "100%" , '& .super-app-theme--header': {
      color: '#F23030', fontWeight:"bolder",
    }, }}>
      <DataGrid
        autoHeight
        rows={products}
        columns={columns}
        he
        pageSizeOptions={[5, 10, 20, 50, 100]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{ toolbar: GridToolbar }}
        sx={{
          boxShadow: 2,
          // border: 2,
          // borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
      />
    </Box>
  );
}
