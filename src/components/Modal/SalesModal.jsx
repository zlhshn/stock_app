import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import useStock from "../../service/useStock";
import { modalStyle } from "../../style/globalStyle";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useSelector } from "react-redux";

const SalesModal = ({ open, handleClose, info, setInfo }) => {
  const { postStock,putStock } = useStock();
  const { products, brands } = useSelector((state) => state.stock);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postStock("sales", info);
    handleClose();
  };

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
              <InputLabel id="brandId">Brands</InputLabel>
              <Select
                labelId="brandId"
                id="brandId"
                name="brandId"
                value={info.brandId}
                label="Brand"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {brands.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="productId">Product</InputLabel>
              <Select
                labelId="productId"
                id="productId"
                name="productId"
                value={info.productId || ""}
                label="Product"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {products.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Quantity"
              name="quantity"
              id="quantity"
              type="text"
              variant="outlined"
              value={info.quantity || ""}
              onChange={handleChange}
              required
            />
            <TextField
              label="Price"
              name="price"
              id="price"
              type="text"
              variant="outlined"
              value={info.price || ""}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" size="large">
              Add New Sale
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default SalesModal;
