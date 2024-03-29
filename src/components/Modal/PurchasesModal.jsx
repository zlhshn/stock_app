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
import { useNavigate } from "react-router-dom";

const PurchasesModal = ({ open, handleClose, info, setInfo }) => {
  const navigate = useNavigate()
  const { postStock,putStock } = useStock();
  const { products, brands, firms } = useSelector((state) => state.stock);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (info._id) {
      putStock("purchases", info)
    } else {
      postStock("purchases", info)
    }

    handleClose()
  }

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
              <InputLabel id="firmId">Firm</InputLabel>
              <Select
                labelId="firmId"
                id="firmId"
                name="firmId"
                value={info?.firmId?._id || info?.firmId}
                label="Firm"
                onChange={handleChange}
              >
              <MenuItem onClick={() => navigate("/dashboard/firms")}>
                  Add New Firm
                </MenuItem>
                <hr />
                {firms.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="brandId">Brands</InputLabel>
              <Select
                labelId="brandId"
                id="brandId"
                name="brandId"
                value={info?.brandId?._id || info?.brandId}
                label="Brand"
                onChange={handleChange}
                required
              >
                <MenuItem onClick={() => navigate("/dashboard/brands")}>
                  Add New Brand
                </MenuItem>
                <hr />
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
                value={info?.productId?._id || info?.productId}
                label="Product"
                onChange={handleChange}
                required
              >
                 <MenuItem onClick={() => navigate("/dashboard/products")}>
                  Add New Product
                </MenuItem>
                <hr />
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
              value={info?.quantity}
              onChange={handleChange}
              required
            />
            <TextField
              label="Price"
              name="price"
              id="price"
              type="text"
              variant="outlined"
              value={info?.price}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" size="large">
              {info?._id ? "Update Purchase" : "Add New Purchase"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default PurchasesModal;
