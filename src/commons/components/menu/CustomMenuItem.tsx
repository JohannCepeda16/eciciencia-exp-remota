import React from "react";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import CalendarToday from "@mui/icons-material/CalendarToday";
import colors from "../../constants/colors";

export interface ICustomMenuItem {
  title: string;
  options: any[];
}

export default function CustomMenuItem(props: ICustomMenuItem) {
  const { title, options } = props;
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <CalendarToday style={{ color: colors.PRIMARY }} />
        </ListItemIcon>
        <ListItemText primary={title} style={{ color: "white" }} />
        {open ? (
          <ExpandLess style={{ color: colors.PRIMARY }} />
        ) : (
          <ExpandMore style={{ color: colors.PRIMARY }} />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {options.map((option) => (
            <ListItemButton onClick={() => option.action} sx={{ pl: 4 }}>
              <ListItemText
                primary={option.title}
                style={{ textAlign: "center", color: colors.THIRD }}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </div>
  );
}
