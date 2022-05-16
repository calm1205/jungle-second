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
    </>
  );
};

export default Top;
