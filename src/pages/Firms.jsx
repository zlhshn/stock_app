import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import useStock from "../service/useStock";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/Modal/FirmModal";
import { useState } from "react";

const Firms = () => {
  const { firms } = useSelector((state) => state.stock);
  const { getStock } = useStock();

  const [info,setInfo] = useState({
    name: "", 
    phone: "", 
    address: "", 
    image: ""
  })

  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({ name: "", phone: "", address: "", image: "" });
  };

  useEffect(() => {
    getStock("firms");
  }, []);

  return (
    <>
      <Typography color={"rebeccapurple"} fontWeight={"bold"} fontSize={25}>
        FİRMS
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
        New Fİrm
      </Button>
      <FirmModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <Grid container gap={2} mt={3} justifyContent={"center"}>
        {firms?.map((firm) => (
          <Grid item key={firm._id} >
            <FirmCard firm={firm} handleOpen={handleOpen} setInfo={setInfo} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Firms;
