import { Grid } from "@mui/material";
import BannerIcon from "../../../assets/banner/Banner.jpg";
import "./Banner.css";
export default function Banner() {
  return (
    <div className="Banner">
      <img className="img" src={BannerIcon} />
    </div>
  );
}
