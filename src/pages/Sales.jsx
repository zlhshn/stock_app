import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useEffect } from "react";
import useStock from "../service/useStock";
import { useSelector } from "react-redux";
import SalesTable from "../components/Table/SalesTable";
import SalesModal from "../components/Modal/SalesModal"

const Sales = () => {
  const { getStock } = useStock();
  const { products, error, loading } = useSelector((state) => state.stock);

  const initialState = {
    productId: "",
    brandId: "",
    quantity: "",
    price: "",
  };
  const [info, setInfo] = useState(initialState);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo(initialState);
  };
  useEffect(() => {
    getStock("products");
    getStock("brands");
    getStock("sales")
  }, []);

  return (
    <>
      <Typography color={"rebeccapurple"} fontWeight={"bold"} fontSize={28}>
        SALES
      </Typography>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          bgcolor: "purple",
          marginY: 3,
          "&:hover ": {
            backgroundColor: "plum",
          },
        }}
      >
        New Sale
      </Button>
      <SalesModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <SalesTable />
    </>
  );
};

export default Sales;
