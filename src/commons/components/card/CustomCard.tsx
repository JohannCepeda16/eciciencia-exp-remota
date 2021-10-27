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

export interface IProps {
  card: ICard;
}

export default function CustomCard(props: any) {
  const card: ICard = props.card;

  return (
    <Card
      sx={{
        minWidth: 345,
        maxWidth: 345,
        maxHeight: 600,
      }}
    >
      <div className="tooltip">
        <span className="tooltiptext">{card.title}</span>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              L
            </Avatar>
          }
          title={
            card.title.length > 50
              ? card.title.slice(0, 50) + "..."
              : card.title
          }
          style={{
            fontFamily: "Domine",
          }}
          subheader={card.date}
        />
      </div>
      <a target="_blank" href={card.urlPic}>
        <CardMedia component="img" height="194" image={card.urlPic} />
      </a>
      <CardContent>
        <textarea
          style={{
            textAlign: "justify",
            width: "100%",
            height: "150px",
            resize: "none",
            fontSize: "16px",
            backgroundColor: "white",
            fontFamily: "Domine",
          }}
          value={card.date}
          disabled
          readOnly
        />
      </CardContent>
      <CardActions disableSpacing style={{ marginTop: "auto" }}>
        <IconButton onClick={() => null} aria-label="like">
          <FavoriteIcon style={{ color: "red" }} />
        </IconButton>
        <Button href={card.meeting} target="_blank">
          Visualizar PDF
        </Button>
      </CardActions>
    </Card>
  );
}
