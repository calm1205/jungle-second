import React from "react";
import {
  Concept,
  System,
  Recruit,
  Access,
  Contact,
} from "~/components/organisms";
import { Footer } from "../templates/Footer";

const Top: React.FC = () => {
  return (
    <>
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
