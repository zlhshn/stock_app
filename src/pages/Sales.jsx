import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useEffect } from "react";
import useStock from "../service/useStock";
import { useSelector } from "react-redux";
import SalesTable from "../components/Table/SalesTable";
import SalesModal from "../components/Modal/SalesModal";
import { Box } from "@mui/material";
import TableSkeleton, { NoDataMsg } from "../components/DataFetchMsg";
import Error from "../components/Error";

const Sales = () => {
  const { getStock } = useStock();
  const { sales, error, loading } = useSelector((state) => state.stock);

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
    getStock("sales");
  }, []);

  return (
    <Box sx={{ height: "85vh" }}>
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

      {error && <Error />}

      {loading ? (
        <TableSkeleton />
      ) : (
        <SalesTable handleOpen={handleOpen} setInfo={setInfo} sales={sales} />
      )}

      {!error && !loading && !sales.length && <NoDataMsg />}
    </Box>
  );
};

export default Sales;
