import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Alert, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import useStock from "../service/useStock";
import { useSelector } from "react-redux";
import BrandCard from "../components/Card/BrandCard";
import Box from "@mui/material/Box";
import BrandModal from "../components/Modal/BrandModal";
import Error from "../components/Error";
import { CardSkeleton, NoDataMsg } from "../components/DataFetchMsg";

const Brands = () => {
  const { searchStock } = useStock();
  const { brands, loading, error } = useSelector((state) => state.stock);

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });

  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({ name: "", phone: "", address: "", image: "" });
  };

  useEffect(() => {
    searchStock("brands", search);
  }, [search]);

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={2}
        paddingX={2}
        flexWrap={"wrap"}
      >
        {" "}
        <Typography
          color={"rebeccapurple"}
          fontWeight={"bold"}
          fontSize={28}
          textAlign={"center"}
        >
          BRANDS
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <TextField
            type="search"
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={search}
            size="small"
            onChange={(e) => setSearch(e.target.value)}
          />{" "}
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
        </Box>
      </Box>
      <BrandModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      {error && <Error />}

      <Grid container gap={5} mt={3} justifyContent={"center"} >
        {loading ? (
          <CardSkeleton />
        ) : (
          <>
            {brands?.map((brand) => (
              <Grid item key={brand._id} justifyContent={"center"} alignItems={"center"}>
                <BrandCard
                  brand={brand}
                  handleOpen={handleOpen}
                  setInfo={setInfo}
                />
              </Grid>
            ))}
          </>
        )}
      </Grid>
      {!error && !loading && !brands.length && <NoDataMsg />}
    </>
  );
};

export default Brands;
