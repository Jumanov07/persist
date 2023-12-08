import { Avatar, Box, Typography, styled } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const {
    userData: { email, firstName, gender, image, lastName, username },
  } = useSelector((state) => state.signIn);

  return (
    <StyledContainer>
      <Box className="box">
        <Avatar src={image} alt="avatar" />

        <Typography>{username}</Typography>
        <Typography>
          {firstName} {lastName}
        </Typography>
        <Typography>{email}</Typography>
        <Typography>{gender}</Typography>
      </Box>
    </StyledContainer>
  );
};

export default Profile;

const StyledContainer = styled(Box)(() => ({
  height: "100vh",
  display: "grid",
  placeItems: "center",

  "& .box": {
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    border: "1px solid white",
    width: "fit-content",
    padding: "20px",
    borderRadius: "4px",
  },

  "& .MuiAvatar-root": {
    width: "100px",
    height: "100px",
  },
}));
