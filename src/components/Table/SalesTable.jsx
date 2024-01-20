import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import useStock from "../../service/useStock";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

export default function SalesTable({ handleOpen, setInfo }) {
  const { sales } = useSelector((state) => state.stock);
  const { deleteStock } = useStock();
  const getRowId = (row) => row._id;

  const columns = [
    {
      field: "createdAt",
      headerName: "Date",
      flex: 0.6,
      minWidth: "200px",
      headerAlign: "center",
      align: "center",
      sortable: false,

      renderCell: ({ row }) =>
        new Date(row.createdAt).toLocaleDateString("tr-TR"),
    },

    {
      field: "brandId",
      headerName: "Brand",
      flex: 1.3,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => row?.brandId?.name,
    },
    {
      field: "productId",
      headerName: "Product",
      flex: 1.3,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => row?.productId?.name,
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
      renderCell: ({ row: { brandId, price, quantity, productId, _id } }) => {
        return [
          <GridActionsCellItem
            key="edit"
            icon={<ModeEditOutlineIcon />}
            label="Edit"
            onClick={() => {
              handleOpen();
              setInfo({ brandId, price, quantity, productId, _id });
            }}
            sx={{ "&:hover": { color: "red" } }}
          />,
          <GridActionsCellItem
            key="delete"
            icon={<DeleteForeverIcon />}
            label="Delete"
            onClick={() => deleteStock("sales", _id)}
            sx={{ "&:hover": { color: "red" } }}
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        flex: "flex",
        justifyContent: "center",
      }}
    >
      <DataGrid
        autoHeight
        rows={sales}
        columns={columns}
        pageSizeOptions={[5, 10, 20, 50, 100]}
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{ toolbar: GridToolbar }}
        sx={{
          boxShadow: 2,
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
      />
    </Box>
  );
}
