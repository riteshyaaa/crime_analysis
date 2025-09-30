import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function ForgotPassword({ open, onClose }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Reset Password</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ mt: 1 }}>
            <FormLabel htmlFor="reset-email">Email</FormLabel>
            <TextField
              margin="dense"
              id="reset-email"
              name="email"
              type="email"
              placeholder="your@email.com"
              fullWidth
            />
          </FormControl>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          Send Reset Link
        </Button>
      </DialogActions>
    </Dialog>
  );
}
