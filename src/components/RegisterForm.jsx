import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";

const RegisterForm = ({ handleChange, values, touched, errors, handleBlur }) => {
  return (
    <Form>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label="User Name"
        name="username"
        id="username"
        type="text"
        variant="outlined"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.username && Boolean(errors.username)}
        helperText={errors.username}
      />
      <TextField
        label="First Name"
        name="firstName"
        id="firstName"
        type="text"
        variant="outlined"
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.firstName && Boolean(errors.firstName)}
        helperText={errors.firstName}
      />
      <TextField
        label="Last Name"
        name="lastName"
        id="lastName"
        type="text"
        variant="outlined"
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.lastName && Boolean(errors.lastName)}
        helperText={errors.lastName}
      />
      <TextField
        label="Email"
        name="email"
        id="email"
        type="email"
        variant="outlined"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={errors.email}
      />
      <TextField
        label="password"
        name="password"
        id="password"
        type="password"
        variant="outlined"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={errors.password}
      />
      <Button type="submit" variant="contained" size="large">
        Submit
      </Button>
    </Box>
  </Form>
  )
}

export default RegisterForm