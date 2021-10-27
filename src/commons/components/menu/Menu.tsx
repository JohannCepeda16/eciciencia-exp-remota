import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CalendarToday from "@mui/icons-material/CalendarToday";
import colors from "../../../commons/constants/colors";
import CustomMenuItem from "../../../commons/components/menu/CustomMenuItem";

export default function TemporaryDrawer() {
  const list = () => (
    <List>
      {["Conograma Día 1", "Cronograma Día 2", "Cronograma Día 3"].map(
        (text: string, index) => (
          <CustomMenuItem
            title={text}
            options={[
              { title: "Concursos", action: null },
              { title: "Conferencias", action: null },
            ]}
          />
        )
      )}
    </List>
  );

  return (
    <div>
      <Drawer variant="permanent" anchor="left">
        <div
          style={{
            maxWidth: "300px",
            height: "100vh",
            backgroundColor: colors.SECONDARY,
          }}
        >
          <h1 style={{ textAlign: "center", color: colors.PRIMARY }}>
            Cronograma
          </h1>
          {list()}
        </div>
      </Drawer>
    </div>
  );
}
