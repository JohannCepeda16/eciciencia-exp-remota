import { ICard } from "../types/ICard";

const data: ICard[] = [
  {
    id: "1",
    type: "Conferencia",
    day: 1,
    date: "3/11/2021",
    hour: "8:00 a 9:00 a.m.",
    modality: "Remoto",
    title: "Conferencia de apertura",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Fapertura.min.jpg?alt=media&token=bbea7d8a-f70a-4952-a4f1-db4f6acb09a9",
    meeting: "",
  },
  {
    id: "2",
    type: "Conferencia",
    day: 1,
    date: "3/11/2021",
    hour: "10:00 a 11:30 a.m.",
    modality: "Remoto",
    title: "La Economía Circular como modelo de sostenibilidad",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Fandercol.min.jpg?alt=media&token=1aba5bc3-29a4-41b1-a95d-a8bd97022b7f",
    meeting: "",
  },
  {
    id: "3",
    type: "Evento",
    day: 1,
    date: "3/11/2021",
    hour: "Todo el día",
    modality: "Remoto",
    title: "Trabajos dirigidos - trabajos de grado posgrado",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Fsemillero.min.jpg?alt=media&token=182593de-a591-4732-9da0-a6ce134d2d49",
    meeting: "",
  },
  {
    id: "4",
    type: "Conferencia",
    day: 1,
    date: "2/11/2021",
    hour: "2:00 a 3:00 p.m.",
    modality: "Remoto",
    title: "La ingeniería en el motorsport",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Fmotorsport.min.jpg?alt=media&token=6d92b6d0-ddbd-4ccc-be15-cd28006c2969",
    meeting: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjZjMDkwZDItZDZiMC00ZTA4LWI4MmQtZjYxNzMxYWViOWNj%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%2277162c78-5804-446b-9140-5b1d11888be8%22%7d",
  },
  {
    id: "5",
    type: "Conferencia",
    day: 1,
    date: "3/11/2021",
    hour: "4:00 a 5:30 p.m.",
    modality: "Remoto",
    title:
      "Reciclaje químico para el Desarrollo de las soluciones de valor agregado en residuos de PET con bajo porcentaje de reciclabidad",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Findustria_quimica.min.jpg?alt=media&token=7bb1f424-9608-443c-8cc8-0bacb11cedc3",
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MDZkOTEzYzgtNDliYS00Y2E2LTlmZTctOWE0NWVjMGI5OGJk%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%2277162c78-5804-446b-9140-5b1d11888be8%22%7d",
  },
  {
    id: "6",
    type: "Evento",
    day: 1,
    date: "3/11/2021",
    hour: "8:00 a.m. a 5:00 p.m",
    modality: "Remoto",
    title: "Foro de graduados para graduados",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Fforo_graduados.min.jpg?alt=media&token=9c623536-dbcb-409b-a0d6-5d22e056ab85",
    meeting: "",
  },
  {
    id: "7",
    type: "Conferencia",
    day: 1,
    date: "3/11/2021",
    hour: "2:00 a 3:00 p.m",
    modality: "Remoto",
    title:
      "Empresa Esenttia - Liderazgo en temas relacionados al cierre del ciclo plástico",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Fciclo_plastico.min.jpg?alt=media&token=69a44d9e-968a-40e3-96bc-e1738ecfe331",
    meeting: "",
  },
  {
    id: "8",
    type: "Conferencia",
    day: 2,
    date: "4/11/2021",
    hour: "10:00 a 11:00 a.m.",
    modality: "Remoto",
    title: "Cómo PRINCE2 me ayudó a llegar a la cumbre del Mont Blanc",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2FPRINCE2.jpg?alt=media&token=01067e71-2095-4ea7-9b23-6b2bf04e2492",
    meeting: "",
  },
  {
    id: "9",
    type: "Evento",
    day: 2,
    date: "4/11/2021",
    hour: "Todo el día",
    modality: "Remoto",
    title:
      "Muestra de posters - Semilleros - trabajos dirigidos - trabajos de grado posgrado",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Fsemillero.min.jpg?alt=media&token=182593de-a591-4732-9da0-a6ce134d2d49",
    meeting: "",
  },
  {
    id: "10",
    type: "Panel",
    day: 2,
    date: "4/11/2021",
    hour: "10:00 a.m. a 12:00 m.",
    modality: "Remoto",
    title:
      "Perspectivas sobre el impacto de la economía circular y naranja en entornos de investigación, desarrollo e innovación y sus sinergias dentro del sistema de ciencia, tecnología e innovación",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2FPerspectivas_sobre_el_impacto.jpg?alt=media&token=b5b603af-4fa1-4e37-a91f-34c5952b9000",
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NjhkNDMzNzktMDhhNy00ZDMyLWE0ZjQtMjFlMzU2ODkzNDgz%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%2277162c78-5804-446b-9140-5b1d11888be8%22%7d",
  },
  {
    id: "11",
    type: "Conferencia",
    day: 2,
    date: "4/11/2021",
    hour: "11:30 a.m. a 12:30 p.m.",
    modality: "Remoto",
    title:
      "Normalización en gestión ambiental- Visión compartida para un mundo mejor",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Fgestion_ambiental.jpg?alt=media&token=da04bffc-ad2e-4d38-a1e6-0048dfea59d2",
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_YTU2M2NkZWMtYzQ4ZS00Mzc2LTg3MWMtOTM0Y2I3YWFhNzc1%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%2277162c78-5804-446b-9140-5b1d11888be8%22%7d",
  },
  {
    id: "12",
    type: "Conferencia",
    day: 2,
    date: "4/11/2021",
    hour: "4:00 a 5:00 p.m.",
    modality: "Remoto",
    title:
      "Empresas prestadoras del servicio público de aseo como fuentes de sostenibilidad y economía circular",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Fempresa_aseo.jpg?alt=media&token=9b206332-39bc-4c7d-bd0c-f94a99f3a3a9",
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_Yzc1Y2MyZjgtYzUyOC00MjVjLWJiY2QtOGU3N2I1MWFmODdl%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%2277162c78-5804-446b-9140-5b1d11888be8%22%7d",
  },
  {
    id: "13",
    type: "Conferencia",
    day: 3,
    date: "5/11/2021",
    hour: "10:00 a 11:00 a.m.",
    modality: "Remoto",
    title:
      "Casos de éxito de organizaciones usando ITIL para gestionar sus servicios",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2FCasos_de_Exito_de_organizaciones.jpg?alt=media&token=d2ea09c0-af12-49c9-8117-a8fea9ee32e9",
    meeting: "",
  },
  {
    id: "14",
    type: "Evento",
    day: 3,
    date: "5/11/2021",
    hour: "Todo el día",
    modality: "Remoto",
    title:
      "Muestra de posters - Semilleros - trabajos dirigidos - trabajos de grado posgrado",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Fsemillero.min.jpg?alt=media&token=182593de-a591-4732-9da0-a6ce134d2d49",
    meeting: "",
  },
  {
    id: "15",
    type: "Conferencia",
    day: 3,
    date: "5/11/2021",
    hour: "2:30 a 4:00 p.m.",
    modality: "Remoto",
    title: "Ganadería colombiana sostenible",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Fganaderia.jpg?alt=media&token=882692d1-66cd-4179-ac03-a64e28eacd62",
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MjMxYTQ1ZWItYzM4Mi00YTE1LWI5MzAtNGM5YTExYmFmMmVi%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%2277162c78-5804-446b-9140-5b1d11888be8%22%7d",
  },
  {
    id: "16",
    type: "Conferencia",
    day: 3,
    date: "5/11/2021",
    hour: "2:00 a 3:30 p.m.",
    modality: "Remoto",
    title: "¿Qué es eso de la Economía Naranja?",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Feconomia_naranja.min-700x600.jpg?alt=media&token=4dd82477-fe25-44e1-93ed-0665ab643642",
    meeting: "",
  },
  {
    id: "17",
    type: "Evento",
    day: 3,
    date: "5/11/2021",
    hour: "3:30 a 5:00 p.m. ",
    modality: "Remoto",
    title: "La Escuela y su reconocimiento como universidad",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Funiversidad_Escuela_fdtFnvv.min-700x600.jpg?alt=media&token=37f16a35-85c7-44f8-adfa-0c9606541dbf",
    meeting:
      "https://forms.office.com/pages/responsepage.aspx?id=hAVkUEAqFkKoS5s-4PP2zwK_lIlLn6JCnxLIy24gSJxUMTg5MUhIMkIzUzhRMTVRRVZBNkhaSjBJOSQlQCNjPTEu",
  },
  {
    id: "18",
    type: "Evento",
    day: 1,
    date: "3/11/2021",
    hour: "10:00 a 10:30 a.m.",
    modality: "Remoto",
    title: "Actividad de ejercicios",
    urlPic:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZWNlZTYzM2UtMDdhMy00NGY3LTlmMzEtZDM5MWQ2Y2YzODJl%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%2277162c78-5804-446b-9140-5b1d11888be8%22%7d",
    meeting: "",
  },
  {
    id: "19",
    type: "Concurso",
    day: 1,
    date: "3/11/2021",
    hour: "11:30 a 01:00 p.m.",
    modality: "Remoto",
    title: "Crea con IISE (M)",
    urlPic:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NTg1OTBlNzAtYzk2NC00OTVkLWJkYjYtMDNhYjE1OGRlZWQw%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%2277162c78-5804-446b-9140-5b1d11888be8%22%7d",
    meeting: "",
  },
  {
    id: "20",
    type: "Evento",
    day: 1,
    date: "3/11/2021",
    hour: "03:00 a 03:30 p.m.",
    modality: "Remoto", // Es presencial ?
    title: "Actividad cuida tu salud",
    urlPic: "",
    meeting: "",
  },
  {
    id: "22",
    type: "Evento",
    day: 2,
    date: "4/11/2021",
    hour: "03:00 a 03:30 p.m.",
    modality: "Presencial",
    title: "Actividad cuida tu salud",
    urlPic: "",
    meeting: "",
  },
  {
    id: "23",
    type: "Concurso",
    day: 2,
    date: "4/11/2021",
    hour: "04:00 a 06:00 p.m.",
    modality: "Remoto",
    title: "¿Qué tanto sabes de fundamentos Económicos?",
    urlPic: "",
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZWM3ZjI3ODQtMGJkNC00ODY3LTk2MDUtN2Y1NGZkMDk0Zjlj%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%2277162c78-5804-446b-9140-5b1d11888be8%22%7d",
  },
  {
    id: "24",
    type: "Evento",
    day: 3,
    date: "5/11/2021",
    hour: "09:00 a 10:00 a.m.",
    modality: "Presencial",
    title: "Reto de liderazgo",
    urlPic: "",
    meeting: "",
  },
  {
    id: "25",
    type: "Evento",
    day: 3,
    date: "5/11/2021",
    hour: "10:00 a 10:30 a.m.",
    modality: "Remoto",
    title: "Maraton de rumba Aeróbicos (M)",
    urlPic: "",
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_Yzg1ZjU5MTYtNTVhMC00YjEzLTlmZTEtMmUxMjM5ZDdiNDIy%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%2277162c78-5804-446b-9140-5b1d11888be8%22%7d",
  },
  {
    id: "26",
    type: "Concurso",
    day: 3,
    date: "5/11/2021",
    hour: "11:30 a 01:30 p.m.",
    modality: "Remoto",
    title: "Crea con IISE (M)",
    urlPic: "",
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MTUyNTZkNTYtMDBlZC00ZWY5LTliMTItNzc1YTg3M2UwNGRi%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%2277162c78-5804-446b-9140-5b1d11888be8%22%7d",
  },
  {
    id: "27",
    type: "Evento",
    day: 3,
    date: "5/11/2021",
    hour: "01:00 a 02:00 p.m.",
    modality: "Remoto",
    title: "Al Tablero",
    urlPic: "",
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_YWUwNzQ0OTUtM2ZkMi00Y2FmLWJkNjQtMjgxMmJhZWY1OGFk%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%2277162c78-5804-446b-9140-5b1d11888be8%22%7d",
  },
  {
    id: "28",
    type: "Evento",
    day: 1,
    date: "3/11/2021",
    hour: "08:00 a 10:00 a.m.",
    modality: "Remoto",
    title: "Seis claves para tener éxito en e-commerce ed 2021-2022 ( R )",
    urlPic: "",
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NTg1YzNkZjktZGVkMy00YTRiLWJlMmQtN2RiZjEzNGQ1MzJj%40thread.v2/0?context=%7b%22Tid%22%3a%",
  },
  {
    id: "29",
    type: "Evento",
    day: 1,
    date: "3/11/2021",
    hour: "11:30 a 01:00 p.m.",
    modality: "Remoto",
    title: "Gestión de la Innovación en tiempos de economía Naranja ( R )",
    urlPic: "",
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MmJkNWYxYzQtODNkNi00NWM5LWIxMWYtOWMwNjU1ZGNiNDQ0%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%2239a1dd36-2c64-4ad9-b3b8-a2b1fcba7fde%22%7d",
  },
  {
    id: "30",
    type: "Evento",
    day: 1,
    date: "3/11/2021",
    hour: "01:00 a 02:30 p.m.",
    modality: "Remoto",
    title: "Construcciones sostenibles en Colombia ( R )",
    urlPic: "",
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_YTVmYTVhNDUtYjY3OS00YWUwLThhMWUtOTQ4NGYzNjk1YWVh%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%2239a1dd36-2c64-4ad9-b3b8-a2b1fcba7fde%22%7d",
  },
  {
    id: "31",
    type: "Evento",
    day: 1,
    date: "3/11/2021",
    hour: "02:30 a 04:00 p.m.",
    modality: "Remoto",
    title: "Buenas prácticas del manejo de residuos generados en el hogar (R)",
    urlPic: "",
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_YWQ1MDZkMDItZjhmNC00OTM3LTgzZDItZWY5YzQ3Y2JmZTgz%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%2239a1dd36-2c64-4ad9-b3b8-a2b1fcba7fde%22%7d",
  },
  {
    id: "32",
    type: "Evento",
    day: 2,
    date: "4/11/2021",
    hour: "10:00 a 10:30 a.m.",
    modality: "Remoto",
    title: "Actividad de ejercicios",
    urlPic: "",
    meeting: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZWNlZTYzM2UtMDdhMy00NGY3LTlmMzEtZDM5MWQ2Y2YzODJl%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%2277162c78-5804-446b-9140-5b1d11888be8%22%7d",
  }
];
export default data;
