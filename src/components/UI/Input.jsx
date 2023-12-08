import { TextField, styled } from "@mui/material";
import { forwardRef } from "react";

const Input = forwardRef(({ onChange, value, ...rest }, ref) => (
  <StyledInput inputRef={ref} onChange={onChange} value={value} {...rest} />
));

export default Input;

const StyledInput = styled(TextField)(() => ({
  "& .MuiInputBase-root": {
    height: "40px",
  },
}));
