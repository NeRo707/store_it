import { Models } from "node-appwrite";
import React from "react";

const ShareInput = ({
  file,
  onInputChange,
  onRemove,
}: {
  file: Models.Document;
  onInputChange: (emails: string[]) => void;
  onRemove: (email: string) => void;
}) => {
  return <div>{file.name}</div>;
};

export default ShareInput;
