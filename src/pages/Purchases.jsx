import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PurchasesModal from "../components/Modal/PurchasesModal";
import PurchasesTable from "../components/Table/PurchasesTable";
import { useState } from "react";
import { useEffect } from "react";
import useStock from "../service/useStock";
import { useSelector } from "react-redux";

const Purchases = () => {
  const { getStock } = useStock();
  const { products, error, loading } = useSelector((state) => state.stock);

  const initialState = {
    firmId: "",
    categoryId: "",
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
    getStock("categories");
    getStock("firms");
  }, []);

  return (
    <>
      <Typography color={"rebeccapurple"} fontWeight={"bold"} fontSize={28}>
        PURCHASES
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
        New PURCHASES
      </Button>
      <PurchasesModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <PurchasesTable />
    </>
  );
};

export default Purchases;
