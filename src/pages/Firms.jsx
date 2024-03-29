import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import useStock from "../service/useStock";
import FirmCard from "../components/Card/FirmCard";
import FirmModal from "../components/Modal/FirmModal";
import { useState } from "react";
import Box from "@mui/material/Box";
import { CardSkeleton, ErrorMsg, NoDataMsg } from "../components/DataFetchMsg";

const Firms = () => {
  const { searchStock } = useStock();
  const { firms, loading, error } = useSelector((state) => state.stock);
  

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
    searchStock("firms", search);
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
          fontSize={26}
          textAlign={"center"}
        >
          FİRMS
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
            New Fİrm
          </Button>
        </Box>
      </Box>

      <FirmModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      {error && <ErrorMsg />}

      <Grid container gap={5} mt={3} justifyContent={"center"} >
        {loading ? (
        
            <CardSkeleton />
        
        ) : (
          <>
            {firms?.map((firm) => (
              <Grid item key={firm._id} justifyContent={"center"} alignItems={"center"}>
                <FirmCard
                  firm={firm}
                  handleOpen={handleOpen}
                  setInfo={setInfo}
                />
              </Grid>
            ))}
          </>
        )}
      </Grid>

      <Box sx={{display:"flex" ,justifyContent:"center"}}>
      {!error && !loading && !firms.length && <NoDataMsg />}</Box>
    </>
  );
};

export default Firms;
