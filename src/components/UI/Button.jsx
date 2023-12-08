import { Button as ButtonMUI, styled } from "@mui/material";

const Button = ({ children, onClick, ...rest }) => (
  <StyledButton onClick={onClick} {...rest}>
    {children}
  </StyledButton>
);

export default Button;

const StyledButton = styled(ButtonMUI)(() => ({
  width: "100%",
  backgroundColor: "blue",
  color: "white",
  border: "1px solid blue",

  "&:hover": {
    backgroundColor: "white",
    color: "blue",
    border: "1px solid blue",
  },
}));
