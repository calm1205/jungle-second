import React from "react";
import {
  Concept,
  System,
  Recruit,
  Access,
  Contact,
  Header,
} from "~/components/organisms";
import { Footer } from "../templates/Footer";

const Top: React.FC = () => {
  return (
    <>
      <Header />
      <Concept />
      <System />
      <Recruit />
      <Access />
      <Contact />
      <Footer>© Lounge Jungle All rights reserved.</Footer>
    </>
  );
};

export default Top;
