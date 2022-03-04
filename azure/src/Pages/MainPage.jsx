import React from "react";
import Navbar from "../components/Navbar";

import Explore from "../components/Explore";
import Products from "../components/Products.js";

import Banner from "../components/Banner.js";

import Card from "../components/Card.js";
import AzureService from "../components/AzureService";

import AzureInnovation from "../components/AzureInnovation.js";
import AzureMigration from "../components/AzureMigartion"

import DiscoverCards from "../components/DiscoverCards.js";
import PreDiscover from "../components/PreDiscover.js";

import BeforeFooter from "../components/BeforeFooter.js";
import FooterNav from "../components/FooterNav.js";
// import Footer from "./components/Pages/Footer";

import {CardImg,Imagea,LinuxImg,Linux} from "../assets/Images/index";

// import CardImg from "../assets/Images/CardImg.webp";
// import Imagea from "../assets/Images/index/Imagea.";

// import LinuxImg from "../assets/LinuxImg.webp";
// import Linux from "../assets/Linux.svg";
import AzureServiceCard from "../components/AzureServiceCard";

function MainPage() {
  return (
    <div className="service-container">
      <Navbar />
      <Explore />
      <Products />
      <div className="heading">
        <h3>We are in this together.Explore Azure Resources and tools to help you navigate COVID-19</h3>
      </div>
      <Banner />
      <h2 className="pre-card">
        On- premises,Hybird,multicloud,or at the edge-create secure,future-ready cloud solutions on Azure
      </h2>
      <div className="wrapper">
        <div className="wrap-wr">
          <Card
            imgsrc={CardImg}
            heading="Use your favorite open-source tools on Azure"
            p="Innovate faster and more flexibly-in any environment-using your favorite tools languages,and frameworks."
          />
          <div className="wrap">
            <Card
              imgsrc={Imagea}
              heading="Innovate with cloud native and open SourceBufferList"
              p="uild and deploy cloud-native apps and take advantage of flexible choice to create microservice applications"
            />

            <Card
              imgsrc={LinuxImg}
              heading="Save big by running Linus on Azure"
              p="Migrate and modernise with Azure solution for Red Hat and SUSE Linux workloads-and save with Azure Hybird Benefit"
            />
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <h3>New to Azure?</h3>
        <button className="btn3">Get an overview</button>
      </div>

      <AzureService />
      <AzureServiceCard />
      <AzureInnovation />
      <AzureMigration />
      <DiscoverCards />
      <PreDiscover />
      <BeforeFooter />
      {/* <Footer /> */}

      {/* <FooterNav /> */}
    </div>
  );
}

export default MainPage;
