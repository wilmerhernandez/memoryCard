import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  color: "#ffff",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleName = () => {
    localStorage.setItem("name", document.getElementById("name").value);
    setOpen(false);
  };
  return (
    <div className="modal">
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        aria-labelledby="Modal"
        aria-describedby="modal set name"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Inserta tu nombre:
            <input
              type="text"
              id="name"
              defaultValue={localStorage.getItem("name")}
            ></input>
          </Typography>

          <button className="modal-button" onClick={handleName}>
            guardar
          </button>
        </Box>
      </Modal>
    </div>
  );
}
