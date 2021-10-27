import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CalendarToday from "@mui/icons-material/CalendarToday";
import colors from "../../../commons/constants/colors";

export default function TemporaryDrawer() {
  const list = () => (
    <List>
      {["Conograma Día 1", "Cronograma Día 2", "Cronograma Día 3"].map(
        (text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <CalendarToday />
            </ListItemIcon>
            <ListItemText primary={text} style={{ color: "black" }} />
          </ListItem>
        )
      )}
    </List>
  );

  return (
    <div>
      <Drawer variant="permanent" anchor="left">
        <div
          style={{
            padding: "10px",
            height: "100vh",
            backgroundColor: colors.PRIMARY,
          }}
        >
          <h1 style={{ textAlign: "center" }}>Cronograma</h1>
          {list()}
        </div>
      </Drawer>
    </div>
  );
}
