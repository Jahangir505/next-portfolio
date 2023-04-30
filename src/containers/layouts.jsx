import { Container, Grid } from "@mui/material";
import React from "react";
import { LeftSideBar } from "./left-sidebar";
import { RightSideBar } from "./right-sidebar";

export const Layouts = (WrapperComponent) => {
  const wrappedPage = () => {
    return (
      <Container>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <LeftSideBar />
          </Grid>
          <Grid item md={9}>
            <WrapperComponent />
          </Grid>
          {/* <Grid item md={2}>
            <RightSideBar />
          </Grid> */}
        </Grid>
      </Container>
    );
  };

  return wrappedPage;
};
