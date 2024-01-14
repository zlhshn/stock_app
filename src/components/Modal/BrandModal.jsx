import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import useStock from "../../service/useStock";
import { modalStyle } from "../../style/globalStyle";

const BrandModal = ({ open, handleClose, info, setInfo }) => {
  const { postStock, putStock } = useStock();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      putStock("brands", info);
    } else {
      postStock("brands", info);
    }

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
            <TextField
              label="Brand Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />

            <TextField
              label="Image Url"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" size="large">
              {info._id ? "UPDATE" : "ADD BRAND"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default BrandModal;
