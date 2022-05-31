import React from 'react';

type Id = {
  id: string;
};

export const Id: React.FC<Id> = ({ id }) => {
  return <span id={id}></span>;
};
