import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import FormCheckout from "./FormCheckout";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", sm: "450px" },
  bgcolor: "#fff",
  borderRadius: "12px",
  boxShadow: 24,
  p: 2,
};

const ModalCheckout = ({ cartData }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        disabled={cartData.length === 0}
        fullWidth
        variant="contained"
        onClick={handleOpen}
      >
        Замовити
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <FormCheckout />
        </Box>
      </Modal>
    </div>
  );
};

export default ModalCheckout;
