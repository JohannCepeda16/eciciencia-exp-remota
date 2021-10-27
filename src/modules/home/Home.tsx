import { Grid } from "@mui/material";
import Banner from "../../commons/components/banner/Banner";
import Menu from "../../commons/components/menu/Menu";

export default function Home() {
  return (
    <Grid container>
      <Grid item xs={2} md={2} lg={2}>
        <Menu />
      </Grid>
      <Grid item xs={10} md={10} lg={10}>
        <Banner />
        <div style={{ padding: "20px" }}>
          <h1>Cronograma nivel 1</h1>
        </div>
      </Grid>
    </Grid>
  );
}
