import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ProductModal from "../components/Modal/ProductModal";
import ProductTable from "../components/Table/ProductTable";
import { useState } from "react";
import { useEffect } from "react";
import useStock from "../service/useStock";
import { useSelector } from "react-redux";
import TableSkeleton, { NoDataMsg } from "../components/DataFetchMsg";
import Error from "../components/Error";
import { Box } from "@mui/material";

const Products = () => {
  const { getStock } = useStock();
  const { products, error, loading } = useSelector((state) => state.stock);

  const initialState = { categoryId: "", brandId: "", name: "" };
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
  }, []);

  return (
    <Box sx={{ height: "85vh" }}>
      <Typography color={"rebeccapurple"} fontWeight={"bold"} fontSize={28}>
        PRODUCTS
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
        New Product
      </Button>
      <ProductModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      {error && <Error />}

      {loading ? (
        <TableSkeleton />
      ) : (
        <ProductTable
          handleOpen={handleOpen}
          setInfo={setInfo}
          products={products}
        />
      )}

      {!error && !loading && !products.length && <NoDataMsg />}
    </Box>
  );
};

export default Products;
