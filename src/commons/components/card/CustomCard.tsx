import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import "./CustomCard.css";
import { ICard } from "../../types/ICard";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import colors from "../../../commons/constants/colors";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ScheduleIcon from "@mui/icons-material/Schedule";
export interface IProps {
  card: ICard;
}

export default function CustomCard(props: any) {
  const card: ICard = props.card;

  return (
    <Card
      sx={{
        minWidth: 400,
        maxWidth: 400,
        maxHeight: 600,
      }}
      style={{
        backgroundColor: "#264474",
        margin: "10px",
        alignSelf: "center",
      }}
    >
      <div>
        <div className="tooltip">
          <strong className="tooltiptext">{card.title}</strong>
          <CardHeader
            title={
              card.title.length > 30
                ? card.title.slice(0, 30) + "..."
                : card.title
            }
            style={{
              width: "100%",
              textAlign: "center",
              alignSelf:"center",
              color: "white",
            }}
          />
        </div>
      </div>
      <a target="_blank" href={card.meeting}>
        <CardMedia component="img" height="200px" image={card.urlPic} />
      </a>
      <CardContent>
        <div style={{display:"flex",  alignItems:"center"}}>
          <CalendarTodayIcon
            style={{ alignSelf: "center", margin: "10px", color: "white" }}
          />
          <strong style={{ color: "white", alignSelf: "center", marginRight:"25px" }}>
            Fecha:
          </strong>
          <label style={{ color: "white", alignSelf: "center" }}>
            {card.date}
          </label>
        </div>
        <div></div>
        <div style={{display:"flex",  alignItems:"center"}}>
          <ScheduleIcon
            style={{ alignSelf: "center", margin: "10px", color: "white" }}
          />
          <strong style={{ color: "white", alignSelf: "center", marginRight:"25px" }}>
            Hora:
          </strong>
          <label style={{ color: "white", alignSelf: "center" }}>
            {card.hour}
          </label>
        </div>
      </CardContent>
      {card.meeting !== "" && (
        <CardActions disableSpacing style={{ marginTop: "auto" }}>
          <IconButton onClick={() => null} aria-label="like">
            <AttachFileIcon style={{ color: "white" }} />
          </IconButton>
          <Button
            href={card.meeting}
            target="_blank"
            style={{ backgroundColor: colors.PRIMARY, color: "white" }}
          >
            Ir a la reuni??n
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
