import React from "react";

import AzureInnovation from "../components/AzureInnovation.jsx";
import AzureMigration from "../components/AzureMigartion";
import AzureService from "../components/AzureService";
import Banner from "../components/Banner.jsx";
import BeforeFooter from "../components/BeforeFooter.jsx";
import Card from "../components/Card.jsx";
import DiscoverCards from "../components/DiscoverCards.jsx";
import Explore from "../components/Explore";
import FooterNav from "../components/FooterNav.jsx";
import Navbar from "../components/Navbar";
import PreDiscover from "../components/PreDiscover.jsx";
 import Products from "../components/Products.jsx";
import Solution from "../components/Solution.jsx";
import Pricing from "../components/Solution.jsx";
import Partners from "../components/Partners.jsx";
import Resources from "../components/Resources.jsx";
import { CardImg, Imagea, LinuxImg, Linux } from "../assets/Images/index";
import { Lin, Red, Azurecom, Functions, Vilo, appService } from "../assets/Images/index";

// import AzureServiceCard from "../components/AzureServiceCard";

function MainPage() {
  return (
    <div className="service-container">
      <Navbar />
      
      {/* <Products /> */}
      {/* <Solution/> */}

      <div className="heading">
        <h3>We are in this together.Explore Azure Resources and tools to help you navigate COVID-19</h3>
      </div>
      <Banner />
      <h2 className="pre-card">
        On- premises,Hybird,multicloud,or at the edge-create secure,future-ready cloud solutions on Azure
      </h2>
      <div className="card-container">
        <div className="wrap-wr">
          <Card
            imgsrc={CardImg}
            alt=""
            cardStyle={{ height: "100%", flexDirection: "column", paddingTop: "4rem" }}
            heading="Use your favorite open-source tools on Azure"
            paragraph="Innovate faster and more flexibly-in any environment-using your favorite tools, languages,and frameworks."
          />
        </div>

        <div className="wrap">
          <Card
            imgsrc={Imagea}
            alt=""
            heading="Innovate with cloud native and open Source"
            paragraph="build and deploy cloud-native apps and take advantage of flexible choice to create microservice applications"
          />

          <Card
            imgsrc={LinuxImg}
            alt=""
            heading="Save big by running Linus on Azure"
            paragraph="Migrate and modernise with Azure solution for Red Hat and SUSE Linux workloads-and save with Azure Hybird Benefit"
          />
        </div>
      </div>

      <div className="header-bottom">
        <h3>New to Azure?</h3>
        <button className="btn3">Get an overview</button>
      </div>
      <div className="azureservice-info">
        <AzureService imgsrc={Lin} alt="" paragraph="" heading="" />
        
         
          
        
      </div>

      {/* <AzureService /> */}
      {/* <AzureServiceCard /> */}
      <AzureInnovation />
      <AzureMigration />
      <DiscoverCards />
      <PreDiscover />
      <BeforeFooter />

      <FooterNav />
    </div>
  );
}

export default MainPage;