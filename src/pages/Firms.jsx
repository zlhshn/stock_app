import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import useStock from "../service/useStock";
import FirmCard from "../components/FirmCard";

const Firms = () => {
  const { firms } = useSelector((state) => state.stock);
  const { getStock } = useStock();

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
      <Grid container gap={2} mt={3} justifyContent={"center"}>
        {firms?.map((firm) => (
          <Grid item key={firm._id}>
            <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Firms;
