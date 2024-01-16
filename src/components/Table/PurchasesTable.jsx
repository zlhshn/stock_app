import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import useStock from "../../service/useStock";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

export default function PurchasesTable({purchases,handleOpen,setInfo}) {

  const { deleteStock} = useStock();
  const getRowId = (row) => row._id;

  const handleEditClick = (params) => {
    handleOpen();
    setInfo({
      ...params.row, 
      productId: params.row?.productId?._id ,
      firmId: params.row?.firmId?._id ,
      brandId: params.row?.brandId?._id ,
      quantity: params.row.quantity,
      price: params.row.price,

    });


  };


  const columns = [
    {
      field: "createdAt",
      headerName: "Date",
      flex: 0.6,
      minWidth: "200px",
      headerAlign: "center",
      align: "center",
      sortable: false,
      valueGetter: (params) =>{
        // console.log(params);
        return params.value.slice(0,10)}

  
    },
    {
      field: "firmId",
      headerName: "Firm",
      flex: 1.3,
      headerAlign: "center",
      align: "center",
      headerClassName: 'super-app-theme--header',
      valueGetter: (params) => params.row?.firmId?.name,
    
    },
    {
      field: "brandId",
      headerName: "Brand",
      flex: 1.3,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => params.row?.brandId?.name,
    },
    {
      field: "productId",
      headerName: "Product",
      type: "text",
      flex: 1.3,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => params.row?.productId?.name,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      flex: 1.3,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      flex: 1.3,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      flex: 1.3,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      flex: 1.3,
      align: "center",
      headerAlign: "center",
      getActions: (props) => [
        <GridActionsCellItem
          icon={<DeleteForeverIcon />}
          onClick={() => deleteStock("purchases", props.id)}
          label="Delete"
          sx={{"&:hover": { color: "red" }}}
        />,
        <GridActionsCellItem
          icon={<ModeEditOutlineIcon  />}
          onClick={() => handleEditClick(props)}
          label="Edit"
          sx={{"&:hover": { color: "red" }}}
        />,
      ],
    },
  ];

  return (
    <Box sx={{ width: "100%" , '& .super-app-theme--header': {
      color: 'rgba(255, 7, 0, 0.55)',
    }, }}>
      <DataGrid
        autoHeight
        rows={purchases}
        columns={columns}
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
