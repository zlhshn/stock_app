import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";

import RegisterForm, {registerSchema} from "../components/RegisterForm";
import useAuth from "../service/useAuth";

const Register = () => {
  const { register } = useAuth();



  return (
    <Box
      margin={"auto"}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundImage: `url(${image})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        objectFit: "cover",
        backdropFilter: "blur(20px)", // Blur değeri
        WebkitBackdropFilter: "blur(5px)",
        // filter: 'blur(5px)',
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems={"center"}
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h3"
            color="primary"
            justifyContent={"center"}
            alignItems={"center"}
            align="center"
          >
            STOCK MANAGEMENT
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          sx={{
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(25px)",
            border: "1px solid rgba(255, 255, 255, 0.8)",
            padding: "16px",
          }}
        >
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
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
            mb={2}
            color="secondary.light"
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

        {/* <Grid item xs={0} sm={7} md={5}>
          <Container>
            <img src={image} alt="" />
          </Container>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default Register;
