import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PurchasesModal from "../components/Modal/PurchasesModal";
import PurchasesTable from "../components/Table/PurchasesTable";
import { useState } from "react";
import { useEffect } from "react";
import useStock from "../service/useStock";
import { useSelector } from "react-redux";
import TableSkeleton, { NoDataMsg } from "../components/DataFetchMsg";
import Error from "../components/Error";

const Purchases = () => {
  const {getPromise} = useStock();
  const { purchases, error, loading } = useSelector((state) => state.stock);

  const initialState = {
    firmId: "",
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
    // getStock("products");
    // getStock("brands");
    // getStock("firms");
    // getStock("purchases");
    getPromise(["products",])
  }, []);

  return (
    <Box sx={{ height: "85vh" }}>
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

      {error && <Error />}
      {loading && <TableSkeleton />}

       {!error && !loading && (
        <>
          
            {purchases.length === 0 ? (
              <NoDataMsg />
            ) : (
              <PurchasesTable
                handleOpen={handleOpen}
                setInfo={setInfo}
                purchases={purchases}
              />
            )}
          
        </>
      )}
   
    </Box>
  );
};

export default Purchases;
