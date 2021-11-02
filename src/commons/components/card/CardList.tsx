import { Grid } from "@mui/material";
import colors from "../../constants/colors";
import CustomCard from "./CustomCard";
import { ICard } from "../../types/ICard";

export interface ICardList {
  cards: ICard[];
  title: string;
}

export default function CardList(props: ICardList) {
  const { cards, title } = props;
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          style={{
            backgroundColor: colors.PRIMARY,
          }}
        >
          <h1
            style={{ alignSelf: "center", textAlign: "center", color: "white" }}
          >
            {title}
          </h1>
        </Grid>
      </div>
      <Grid
        container
        spacing={10}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        {cards.map((card: ICard, index: number) => (
          <Grid item key={index}>
            <CustomCard card={card} xs={6} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
