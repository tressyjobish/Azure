import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Card from "./components/Card";
import CardData from "./components/CardData";
import Cardimg1 from "./assets/CardImg.webp";
import Imagea from "./assets/Imagea.webp";
import LinuxImg from "./assets/LinuxImg.webp";
import Section from "./components/Section";
import Linux from "../src/assets/Linux.svg";
import AzureServiceCard from "./components/AzureServiceCard";
import Explore from "./components/Explore";
import Products from "./components/Products";
import React,{useState} from "react";
import AzureInnovation from "./components/AzureInnovation";
import AzureMigration from "./components/AzureMigration";
import DiscoverCards from "./components/DiscoverCards";
function App() {
  return (
    <div>
      <Navbar />
      <Explore />
      <Products/>
      <div className="heading">
                    <h3>
                        We are in this together.Explore Azure Resources and tools to help you navigate COVID-19
                    </h3>
                    </div>
      <Banner />
      <h2 className="pre-card">On- premises,Hybird,multicloud,or at the edge-create secure,future-ready cloud solutions on Azure</h2>
      <div className="wrapper">
        <div className="wrap-wr">
        <Card imgsrc={Cardimg1} heading="Use your favorite open-source tools on Azure" p="Innovate faster and more flexibly-in any environment-using your favorite tools languages,and frameworks." />
      <div className="wrap">
        <Card imgsrc={Imagea} heading="Innovate with cloud native and open SourceBufferList" p="uild and deploy cloud-native apps and take advantage of flexible choice to create microservice applications" />
        
        <Card imgsrc={LinuxImg} heading="Save big by running Linus on Azure"  p="Migrate and modernise with Azure solution for Red Hat and SUSE Linux workloads-and save with Azure Hybird Benefit" />
        </div>
      </div>
    </div>
    <div className="header-bottom"><h3>New to Azure?</h3>
    <button className="btn3">Get an overview</button></div>
    <div>
    <Section>
      <div className="service-card">
      <service imgsrc={Linux} p="Provision VMs for Ubuntu,Red Hat,SUSE,and other popular distribution" a="Linux virtual ,machines (VMs) in Azure"/>
      </div>
      
      </Section>
    </div>
    <AzureServiceCard/>
    <AzureInnovation/>
    <AzureMigration/>
    <DiscoverCards/>
    
    </div>
    
    
  );
}

export default App;
