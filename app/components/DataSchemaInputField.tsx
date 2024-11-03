import { Editor } from "@monaco-editor/react";
import { Dispatch, SetStateAction } from "react";

type DataSchemaInputFieldProps = {
  value: string;
  changeValue: Dispatch<SetStateAction<string>>;
};

// TODO: highlight of a key is used multiple times (an forbid)
//TODO: disable autocomplete
//TODO: highlight to double indentation (and forbid)
const DataSchemaInputField = ({
  value,
  changeValue,
}: DataSchemaInputFieldProps): JSX.Element => {
  return (
    <Editor
      height={400}
      width={500}
      language="javascript"
      theme="vs-dark"
      options={{ minimap: { enabled: false } }}
      value={value}
      onChange={(value) => changeValue(value || "")}
    />
  );
};

export default DataSchemaInputField;
