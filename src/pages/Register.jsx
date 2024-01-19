import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Formik } from "formik";

import RegisterForm, {registerSchema} from "../components/RegisterForm";
import useAuth from "../service/useAuth";



const Register = () => {
  const { register } = useAuth();



  return (
    <Box
   
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        objectFit: "cover",
        backdropFilter: "blur(20px)", // Blur değeri
        WebkitBackdropFilter: "blur(5px)",
        backgroundColor: "rgb(35,47,205)",
        background: "linear-gradient(90deg, #3a7eeb 0%, rgba(29,116,253,0.8) 50%, rgba(29,116,253,0.5) 100%)",
        
   

      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems={"center"}
        direction="row-reverse"
        sx={{
          height: 'auto',
          p: 2,
          minHeight: '100vh', 
          '@media (min-width:500px)': {
            height: '100vh',
          },
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h4"
            color="purple"
            justifyContent={"center"}
            alignItems={"center"}
            align="center"
            fontWeight={"bold"}
        
          >
            STOCK MANAGEMENT
          </Typography>
        </Grid>

        <Grid
          item
          xs={11}
          sm={10}
          md={5}
          sx={{
            background: "rgba(255, 255, 255, 0.5)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(25px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            padding: "16px",
          }}
        >
          <Avatar
            sx={{
              backgroundColor: "purple",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={3}
            color="purple"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              password: "",
              email: "",
              firstName: "",
              lastName: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              register(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>

          <Box color="purple" sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/">Do you have an account?</Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
