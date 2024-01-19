export const btnStyle = {
    "&:hover": { color: "red", cursor: "pointer" },
  }
export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #164773",
  boxShadow: 2,
  p: 4,
  background: "rgba(255, 255, 255, 0.6)",
  backdropFilter: "blur(8px)",
  '@media (max-width: 600px)': {
    width: 300, 
  },
};
  