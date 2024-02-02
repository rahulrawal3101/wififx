import Image from "next/image";
import styles from "./page.module.css";
import Header from "./componant/Header";
import HomePageComp1 from "./HomePageComp1.js/page";
import HomePageComp2 from "./HomePageComp2.js/page";
import { Grid } from "@mui/material";

export default function Home() {
  return (
   <>
   <Header/>
   <Grid container sx={{bgcolor: '#fafafa'}}>
    <Grid item>
    <HomePageComp1/>
   <HomePageComp2/>
    </Grid>
   

   </Grid>
   </>
  );
}
