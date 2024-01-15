import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import useStock from "../../service/useStock";
import { modalStyle } from "../../style/globalStyle";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { useSelector } from "react-redux";
const ProductModal = ({ open, handleClose, info, setInfo }) => {
  const { postStock, putStock } = useStock();
  const { products } = useSelector((state)=>state.stock);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      putStock("firms", info);
    } else {
      postStock("firms", info);
    }

    handleClose();
  };

  //   const SelectLabels = () => {
  //     const [age, setAge] = useState("");

  //     const handleChange = (event) => {
  //       setAge(event.target.value);
  //     };
  //   };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            onSubmit={handleSubmit}
          >
            <FormControl>
              <InputLabel id="categories">Categories</InputLabel>
              <Select
                labelId="categories"
                id="categories"
                value={info.categories}
                label="Categories"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {products.map((item) => {
                 <MenuItem key={item.categoryId.name} value={item.categoryId.name}>
                 {item.categoryId.name}
               </MenuItem>
                })}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="brands">Brands</InputLabel>
              <Select
                labelId="brands"
                id="brands"
                value={info.brands}
                label="Brands"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Product Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" size="large">
              {info._id ? "Update Product" : "Add Product"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ProductModal;
