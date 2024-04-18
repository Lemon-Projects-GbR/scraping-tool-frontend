import { Box, FormControl, TextField, Button } from "@mui/material";
import type { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";
import DataSchemaTextField from "../components/DataSchemaTextField";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

/* 
TODO: Siehe unten
Convert this String:

  attribute1: value1
  attribute2:
    attribute3: value3
    attribute4: value4
    attribute5:
      attribute6: value6
      attribute7: value7
  attribute8: value8
  

to this Object:
  
    {
      attribute1: "value1",
      attribute2: {
        attribute3: "value3",
        attribute4: "value4",
        attribute5: {
          attribute6: "value6",
          attribute7: "value7",
        },
      },
      attribute8: "value8",
    } 
*/

function parseStringToObject(str: string) {
  //
  let obj = str;
  return obj;
}

// TODO: Multiple URLs

export default function Index() {
  const str = `
attribute1: value1
 attribute2:
   attribute3: value3
   attribute4: value4
   attribute5:
     attribute6: value6
     attribute7: value7
attribute8: value8
`;

  useEffect(() => {
    console.log(parseStringToObject(str));
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <FormControl>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box
            sx={{ padding: "1rem", display: "flex", flexDirection: "column" }}
          >
            <TextField label="URL" variant="outlined" />
            <Button variant="contained">Add URL</Button>
            <Box sx={{ display: "flex" }}>
              <TextField label="Attibute" variant="outlined" id="attr1" />
              <TextField label="Selector" variant="outlined" id="sel1" />
            </Box>
            <Button variant="contained">Add Attribute</Button>
          </Box>
          <Box sx={{ padding: "1rem" }}>
            <DataSchemaTextField />
          </Box>
        </Box>
      </FormControl>
    </div>
  );
}
