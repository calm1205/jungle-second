import React from "react";
import {
  Concept,
  System,
  Recruit,
  Access,
  Contact,
} from "~/components/organisms";
import { MainLayout } from "~/components/templates";

const Top: React.FC = () => {
  return (
    <MainLayout>
      <Concept />
      <System />
      <Recruit />
      <Access />
      <Contact />
    </MainLayout>
  );
};

export default Top;
