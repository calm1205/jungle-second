import React from "react";
import {
  Concept,
  Heading,
  System,
  Description,
  Recruit,
} from "~/components/molecules";

const Top: React.FC = () => {
  return (
    <>
      <Heading />
      <Concept />
      <System />
      <Description />
      <Recruit />
    </>
  );
};

export default Top;
