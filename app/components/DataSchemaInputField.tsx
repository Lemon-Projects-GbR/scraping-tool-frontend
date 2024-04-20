import { Editor } from "@monaco-editor/react";
import { Dispatch, SetStateAction } from "react";

type DataSchemaInputFieldProps = {
  value: string;
  changeValue: Dispatch<SetStateAction<string>>;
};

const DataSchemaInputField = ({
  value,
  changeValue,
}: DataSchemaInputFieldProps): JSX.Element => {
  return (
    <Editor
      height={200}
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
