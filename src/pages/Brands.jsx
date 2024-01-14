import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import useStock from "../service/useStock";
import { useSelector } from "react-redux";
import BrandCard from "../components/BrandCard";
import BrandModal from "../components/Modal/BrandModal";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Brands = () => {
  const { postStock, getStock } = useStock();
  const { brands, loading, error } = useSelector((state) => state.stock);

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({ name: "", phone: "", address: "", image: "" });
  };

  useEffect(() => {
    getStock("brands");
  }, []);

  return (
    <>
      <Typography color={"rebeccapurple"} fontWeight={"bold"} fontSize={28}>
        BRANDS
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
        New Brand
      </Button>
      <BrandModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <Grid container gap={4} mt={3} justifyContent={"center"}>
        {loading && <Loading />}
        {brands.map((brand) => (
          <Grid item key={brand._id}>
            <BrandCard
              brand={brand}
              handleOpen={handleOpen}
              setInfo={setInfo}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Brands;
