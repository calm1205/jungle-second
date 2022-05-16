import React from "react";
import {
  Concept,
  Heading,
  System,
  Description,
  Recruit,
  Access,
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
    </>
  );
};

export default Top;
