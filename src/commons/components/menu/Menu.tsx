import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import colors from "../../../commons/constants/colors";
import CustomMenuItem from "../../../commons/components/menu/CustomMenuItem";

export default function TemporaryDrawer(props: any) {
  const filterAction = props.filterAction;
  const list = () => (
    <List>
      {[
        "General",
        "Cronograma Día 1",
        "Cronograma Día 2",
        "Cronograma Día 3",
      ].map((text: string, index) => (
        <CustomMenuItem
          filterAction={filterAction}
          title={text}
          options={[
            { id: index, title: "Todo", value: "Todo" },
            { id: index, title: "Eventos", value: "Evento" },
            { id: index, title: "Concursos", value: "Concurso" },
            { id: index, title: "Conferencias", value: "Conferencia" },
          ]}
        />
      ))}
    </List>
  );

  return (
    <Drawer variant="permanent" anchor="left">
      <div
        style={{
          maxWidth: "300px",
          height: "auto",
          minHeight: "auto",
          backgroundColor: colors.PRIMARY,
        }}
      >
        <h1 style={{ textAlign: "center", color: colors.SECONDARY }}>
          Cronograma
        </h1>
        {list()}
      </div>
    </Drawer>
  );
}
