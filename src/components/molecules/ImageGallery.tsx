import React from "react";
import SwipeableViews from "react-swipeable-views";

type ImageGallery = {
  images: string[];
};

export const ImageGallery: React.FC<ImageGallery> = () => {
  return (
    <SwipeableViews>
      <p>hello</p>
      <p>world</p>
      <p>good bye</p>
    </SwipeableViews>
  );
};
