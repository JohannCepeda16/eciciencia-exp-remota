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
		  maxHeight:"auto",
          height: "auto",
          backgroundColor: colors.SECONDARY,
        }}
      >
        <h1 style={{ textAlign: "center", color: "white" }}>
          Cronograma
        </h1>
        {list()}

        <hr />
        <div
          style={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <label
            style={{
              textAlign: "center",
              display: "block",
              width: "100%",
              marginTop: "15px",
              marginBottom: "15px",
			  color:"white"
            }}
          >
            Ir a la Página principal eciciencia
          </label>
          <a
            target="_blank"
            href="https://www.escuelaing.edu.co/es/eventos/eciciencia_2021/"
          >
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "150px",
                height: "150px",
              }}
              src="https://firebasestorage.googleapis.com/v0/b/eciciencia-posters.appspot.com/o/BannerECI.jpg?alt=media&token=f141974f-ad8b-4712-883d-20efc22827c4"
            />
          </a>
        </div>

        <div
          style={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <label
            style={{
              textAlign: "center",
              display: "block",
              width: "100%",
              marginTop: "15px",
              marginBottom: "15px",
			  color:"white"
            }}
          >
            Galeria de Posters
          </label>
          <a target="_blank" href="https://eciciencia-posters.web.app/">
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "100px",
                height: "100px",
                marginBottom:"10px",
				borderRadius:"50%"
              }}
              src="https://firebasestorage.googleapis.com/v0/b/eciciencia-posters.appspot.com/o/logo.png?alt=media&token=401acbb1-cb5d-471a-bdaf-39ce5a7c455c"
            />
          </a>
        </div>
      </div>
    </Drawer>
  );
}
