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
      }}
    >
      <div>
        <div className="tooltip">
          <strong className="tooltiptext">{card.title}</strong>
          <CardHeader
            title={
              card.title.length > 20
                ? card.title.slice(0, 20) + "..."
                : card.title
            }
            style={{
              width: "100%",
              textAlign: "center",
              color: "white",
            }}
          />
        </div>
      </div>
      <a target="_blank" href={card.meeting}>
        <CardMedia component="img" height="200px" image={card.urlPic} />
      </a>
      <CardContent>
        <strong style={{ color: "black" }}>Fecha: </strong>
        <label style={{ color: "black" }}>{card.date}</label>
        <div></div>
        <strong style={{ color: "black" }}>Hora: </strong>
        <label style={{ color: "black" }}>{card.hour}</label>
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
            Ir a a la reunión
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
