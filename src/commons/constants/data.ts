import { ICard } from "../types/ICard";
import { reto } from "../../assets/index";

const data: ICard[] = [
  {
    id: "0",
    type: "Evento",
    day: 1,
    date: "3/11/2021",
    hour: "Votaciones - Todo el día",
    modality: "Remoto",
    title: "Votaciones - Reto de liderazgo",
    urlPic: reto,
    meeting: "https://eciciencia-posters.web.app/#reto-liderazgo",
  },
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
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_Y2FmN2M0ZjQtZjU2Mi00MzU3LWIzNDEtMWIxYWIwZmQ4NjMw%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%223a41c438-1606-44f2-a5ab-1d1fa25691ce%22%7d",
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
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_Y2FmN2M0ZjQtZjU2Mi00MzU3LWIzNDEtMWIxYWIwZmQ4NjMw%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%223a41c438-1606-44f2-a5ab-1d1fa25691ce%22%7d",
  },
  {
    id: "3",
    type: "Evento",
    day: 1,
    date: "3/11/2021",
    hour: "Todo el día",
    modality: "Remoto",
    title:
      "Muestra de posters - Semilleros - trabajos dirigidos - trabajos de grado posgrado",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Fsemillero.min.jpg?alt=media&token=182593de-a591-4732-9da0-a6ce134d2d49",
    meeting: "https://eciciencia-posters.web.app/",
  },
  {
    id: "4",
    type: "Conferencia",
    day: 1,
    date: "3/11/2021",
    hour: "2:00 a 3:00 p.m.",
    modality: "Remoto",
    title: "La ingeniería en el motorsport",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Fmotorsport.min.jpg?alt=media&token=6d92b6d0-ddbd-4ccc-be15-cd28006c2969",
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjZjMDkwZDItZDZiMC00ZTA4LWI4MmQtZjYxNzMxYWViOWNj%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%2277162c78-5804-446b-9140-5b1d11888be8%22%7d",
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
    id: "7",
    type: "Conferencia",
    day: 2,
    date: "4/11/2021",
    hour: "09:00 a 10:00 a.m",
    modality: "Remoto",
    title: "Economía circular en los palsticos",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Fciclo_plastico.min.jpg?alt=media&token=69a44d9e-968a-40e3-96bc-e1738ecfe331",
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_YjhmZDJiZmItYTBiNi00OTY4LTk0ZWEtMTc0ZTY2NGIxMTdi%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%2277162c78-5804-446b-9140-5b1d11888be8%22%7d",
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
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZTc3ZmY1MTEtNjUxOS00NDYwLThlZjUtOWViMzk0NDE0NjYy%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%223a41c438-1606-44f2-a5ab-1d1fa25691ce%22%7d",
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
    meeting: "https://eciciencia-posters.web.app/",
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
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_YmY1MDhkZTItYjBjMS00YTUyLTg5NTUtZmQzMzdhYjI5YzI4%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%223a41c438-1606-44f2-a5ab-1d1fa25691ce%22%7d",
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
    meeting: "https://eciciencia-posters.web.app/",
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
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NzI5ZjkyOTItYmYyYy00NzUxLTgwZTgtNDg3ZTE2MDZmNTE5%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%223a41c438-1606-44f2-a5ab-1d1fa25691ce%22%7d",
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
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Factividades.png?alt=media&token=3deda10c-9c81-4d9a-b8a1-90e45519e91d",
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZWNlZTYzM2UtMDdhMy00NGY3LTlmMzEtZDM5MWQ2Y2YzODJl%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%2277162c78-5804-446b-9140-5b1d11888be8%22%7d",
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
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2FISEEjpg.jpg?alt=media&token=6288ebcc-e9eb-4619-9fd5-d296a1302f61",
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NTg1OTBlNzAtYzk2NC00OTVkLWJkYjYtMDNhYjE1OGRlZWQw%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%2277162c78-5804-446b-9140-5b1d11888be8%22%7d",
  },
  {
    id: "20",
    type: "Evento",
    day: 1,
    date: "3/11/2021",
    hour: "03:00 a 03:30 p.m.",
    modality: "Remoto",
    title: "Actividad cuida tu salud",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Fmedico.png?alt=media&token=304c5c22-7bd4-4eb6-80a3-4166aa42ac41",
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_M2QxMjQwZDEtM2Y5Yy00ZGIzLThlYzAtZGJhNWU1NThiMDRi%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%223a41c438-1606-44f2-a5ab-1d1fa25691ce%22%7d",
  },
  {
    id: "22",
    type: "Evento",
    day: 2,
    date: "4/11/2021",
    hour: "03:00 a 03:30 p.m.",
    modality: "Remoto",
    title: "Actividad cuida tu salud",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Fmedico.png?alt=media&token=304c5c22-7bd4-4eb6-80a3-4166aa42ac41",
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MDMwNTYxMDMtNmJlNy00ZmZlLTkwOWQtYmVmYmE3YmQ2MzQ4%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%223a41c438-1606-44f2-a5ab-1d1fa25691ce%22%7d",
  },
  {
    id: "23",
    type: "Concurso",
    day: 2,
    date: "4/11/2021",
    hour: "04:00 a 06:00 p.m.",
    modality: "Remoto",
    title: "¿Qué tanto sabes de fundamentos Económicos?",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Fanalisis.png?alt=media&token=a1565b36-8561-4b55-9905-65e995e9eb0e",
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZWM3ZjI3ODQtMGJkNC00ODY3LTk2MDUtN2Y1NGZkMDk0Zjlj%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%2277162c78-5804-446b-9140-5b1d11888be8%22%7d",
  },
  {
    id: "25",
    type: "Evento",
    day: 3,
    date: "5/11/2021",
    hour: "10:00 a 10:30 a.m.",
    modality: "Remoto",
    title: "Maraton de rumba Aeróbicos (M)",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Fbaile.png?alt=media&token=6425483a-48f6-462b-a8de-9a66e5042e6b",
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
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2FISEEjpg.jpg?alt=media&token=6288ebcc-e9eb-4619-9fd5-d296a1302f61",
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
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Fremote.png?alt=media&token=e00968e4-9ddd-4be0-b5b5-7381ac8cfdcf",
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
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Fseis-claves-exitojpg.jpg?alt=media&token=ea22c989-b522-46ef-938e-9b5c843a9dd9",
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
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Feconomia-naranja.jpg?alt=media&token=e84572a4-a051-4248-9993-fd5a48c83e32",
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
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Fconstruccion-sostenible.jpg?alt=media&token=da911566-4ac1-447c-88fe-421b713ae3e1",
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
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Fmanejo-residuos.jpg?alt=media&token=43a28f59-d92b-42d2-a4a1-ca0e25434977",
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
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Factividades.png?alt=media&token=3deda10c-9c81-4d9a-b8a1-90e45519e91d",
    meeting:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZWNlZTYzM2UtMDdhMy00NGY3LTlmMzEtZDM5MWQ2Y2YzODJl%40thread.v2/0?context=%7b%22Tid%22%3a%2250640584-2a40-4216-a84b-9b3ee0f3f6cf%22%2c%22Oid%22%3a%2277162c78-5804-446b-9140-5b1d11888be8%22%7d",
  },
  {
    id: "34",
    type: "Evento",
    day: 1,
    date: "3/11/2021 a 4/11/2021",
    hour: "08:00 a.m. a 11:59 p.m.",
    modality: "Remoto",
    title: "Hackathon: #ElectrónicaCreativa - 48 horas",
    urlPic:
      "https://firebasestorage.googleapis.com/v0/b/eciciencia2021-exp-remota.appspot.com/o/eventws%2Fhackaton.png?alt=media&token=c773f524-76e1-47f8-9e4e-aef667234aef",
    meeting:
      "https://forms.office.com/pages/responsepage.aspx?id=hAVkUEAqFkKoS5s-4PP2z8fIxMJcDmdJpvg9ffJXSDZUM1lDQUJRV1VSUjBCSEpKT1YyWEhDNDIyRC4u",
  },
];
export default data;
