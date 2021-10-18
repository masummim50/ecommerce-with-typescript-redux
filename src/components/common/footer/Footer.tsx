import React from "react";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  const noNamed = [
    { menuTitle: "" },
    { name: "Urgent service", link: "/" },
    { name: "Get Update", link: "/" },
    { name: "Fast delivery", link: "/" },
  ];
  const ourAddress = [
    { menuTitle: "" },
    { name: "New York - 101010 Hudson", link: "/" },
    { name: "Yards", link: "/" },
  ];
  const services = [
    { menuTitle: "Services" },
    { name: "Touch up", link: "/" },
    { name: "Retouching design", link: "/" },
    { name: "Revisions", link: "/" },
    { name: "Revisions", link: "/" },
    { name: "Revisions", link: "/" },
  ];
  const upcoming = [
    { menuTitle: "Upcoming" },
    { name: "Sketch Designs", link: "/" },
    { name: "Photo retouching", link: "/" },
    { name: "Photo recreating", link: "/" },
    { name: "Product Design", link: "/" },
  ];
  return (
    <footer className="mt-5">
      <div className="container-fluid bg-dark py-5">
        <div className="row">
          <FooterColumn menuItems={noNamed}></FooterColumn>
          <FooterColumn menuItems={services}></FooterColumn>
          <FooterColumn menuItems={upcoming}></FooterColumn>
          <FooterColumn menuItems={ourAddress}></FooterColumn>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
