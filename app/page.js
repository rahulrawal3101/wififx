import Image from "next/image";
import styles from "./page.module.css";
import Header from "./componant/Header";
import HomePageComp1 from "./HomePageComp1.js/page";
import HomePageComp2 from "./HomePageComp2.js/page";

export default function Home() {
  return (
   <>
   <Header/>
   <HomePageComp1/>
   <HomePageComp2/>
   </>
  );
}
