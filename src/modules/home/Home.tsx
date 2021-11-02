import { Grid } from "@mui/material";
import Banner from "../../commons/components/banner/Banner";
import Menu from "../../commons/components/menu/Menu";
import data from "../../commons/constants/data";
import CustomCard from "../../commons/components/card/CustomCard";
import colors from "../../commons/constants/colors";
import CardList from "../../commons/components/card/CardList";
import { ICard } from "../../commons/types/ICard";
import { useEffect, useState } from "react";

export default function Home() {
  const [day, setDay] = useState(0);
  const [filter, setFilter] = useState("Todo");
  const [filterData, setFilterData] = useState<ICard[]>(data);

  const filterAction = (day: number, valueType: string) => {
    setDay(day);
    setFilter(valueType);
    let customFilterData = [];
    if (day === 0 && valueType !== "Todo") {
      customFilterData = data.filter((item) => item.type === valueType);
    } else if (day !== 0 && valueType === "Todo") {
      customFilterData = data.filter((item) => item.day === day);
    } else if (day !== 0 && valueType !== "Todo") {
      customFilterData = data.filter(
        (item) => item.day === day && item.type === valueType
      );
    } else {
      customFilterData = data;
    }

    let orderData = customFilterData.sort((a,b) => (a.date <= b.date) ? 1 : ((b.date > a.date) ? -1 : 0))

    setFilterData([...orderData]);
  };

  useEffect(() => {
    filterAction(day, filter);
  }, [day, filter]);

  return (
    <Grid container>
      <Grid item xs={2} md={2} lg={2}>
        <Menu filterAction={filterAction} />
      </Grid>
      <Grid item xs={12} md={10} lg={10} style={{ alignSelf: "center" }}>
        <Banner />
        <div
          style={{
            margin: "20px",
            alignSelf: "center",
            width: "95%",
          }}
        >
          <CardList
            title={
              day === 0 && filter === "Todo"
                ? "Cronograma completo"
                : day === 0 && filter !== "Todo"
                ? "Cronograma general: " + filter + "s"
                : "Cronograma día " + day + ": " + filter + "s"
            }
            cards={filter === "general" ? data : filterData}
          />
        </div>
      </Grid>
    </Grid>
  );
}
