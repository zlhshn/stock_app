import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ProductModal from "../components/Modal/ProductModal";
import ProductTable from "../components/Table/ProductTable";
import { useState } from "react";
import { useEffect } from "react";
import useStock from "../service/useStock";
import { useSelector } from "react-redux";
import TableSkeleton, { ErrorMsg, NoDataMsg } from "../components/DataFetchMsg";
import { Box } from "@mui/material";

const Products = () => {
  const { getPromise } = useStock();
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
    getPromise(["products", "brands", "categories"]);
  }, []);

  return (
    <Box sx={{ height: "95vh" }}>
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

      {error && <ErrorMsg />}
      {loading && <TableSkeleton />}

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {" "}
        {!error && !loading && (
          <>
            {products.length === 0 ? (
              <NoDataMsg />
            ) : (
              <ProductTable
                handleOpen={handleOpen}
                setInfo={setInfo}
                products={products}
              />
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default Products;
