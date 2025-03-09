import Banner from "../components/banner/banner";
import Aboutus from "../components/aboutus/aboutus";
import Qualities from "../components/qualities/qualities";
import Menu from "../components/menu/menu";
import Onlineorder from "../components/onlineorder/onlineorder";

// src/pages/Home.jsx
export default function Home() {
    return (
      
      <div>
        <Banner/>
        <Qualities/>
        <Aboutus/>
        <Menu/>
        <Onlineorder/>
        
        
        
      </div>
    );
  }