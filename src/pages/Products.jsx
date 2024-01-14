import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ProductModal from "../components/Modal/ProductModal";
import ProductTable from "../components/Table/ProductTable";
import { useState } from "react";
import { useEffect } from "react";
import useStock from "../service/useStock";
import { useSelector } from "react-redux";

const Products = () => {
  const { getStock } = useStock();
  const { products } = useSelector((state) => state.stock);
  const [info, setInfo] = useState({
    name: "",
    categories: "",
    brands: "",
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({ name: "", categories: "", brands: "" });
  };
  useEffect(() => {
    getStock("products");
    getStock("brands");
    getStock("categories");
  }, []);

  return (
    <>
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
      <ProductTable />
    </>
  );
};

export default Products;
