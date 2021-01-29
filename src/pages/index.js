import Yoga from "./Yoga/Yoga";
import Massages from "./Massages/Massages";
import Waxing from "./Waxing/Waxing";
import HandsFeet from "./HandsFeet/HandsFeet";
import Pamper from "./Pamper/Pamper";
import Blog from "./Blog/Blog";
import Gallery from "./Gallery/Gallery";
import Contact from "./Contact/Contact";
import Facials from "./Facials/Facials";

const routes = [
  { path: "/yoga", component: Yoga },
 
  { path: "/massages", component: Massages },
  { path: "/waxing", component: Waxing },
  { path: "/handsFeet", component: HandsFeet },
  { path: "/pamper", component: Pamper },
  { path: "/facials", component: Facials },
  {path: "/gallery", component: Gallery },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
];

export default routes;
