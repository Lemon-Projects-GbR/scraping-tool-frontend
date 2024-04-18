import React, { useRef } from "react";
import { TextField } from "@mui/material";

const DataSchemaTextField = (): JSX.Element => {
  const textFieldRef = useRef<HTMLTextAreaElement | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Tab" && textFieldRef.current) {
      event.preventDefault();
      const start = textFieldRef.current.selectionStart;
      const end = textFieldRef.current.selectionEnd;
      const value = textFieldRef.current.value;
      const newValue = value.substring(0, start) + "\t" + value.substring(end);
      textFieldRef.current.value = newValue;
      textFieldRef.current.selectionStart = textFieldRef.current.selectionEnd =
        start + 1;
    }
  };

  return (
    <div>
      <TextField
        inputRef={textFieldRef}
        onKeyDown={handleKeyDown}
        label="Data Schema"
        variant="outlined"
        multiline
        minRows={5}
        id="schema"
        sx={{ width: "30rem" }}
      />
    </div>
  );
};

export default DataSchemaTextField;
