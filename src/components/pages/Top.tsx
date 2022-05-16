import React from "react";
import {
  Concept,
  Heading,
  System,
  Description,
  Recruit,
  Access,
  Contact,
} from "~/components/molecules";
import { Footer } from "../templates/Footer";

const Top: React.FC = () => {
  return (
    <>
      <Heading />
      <Concept />
      <System />
      <Description />
      <Recruit />
      <Access />
      <Contact />
      <Footer>© Lounge Jungle All rights reserved.</Footer>
    </>
  );
};

export default Top;
