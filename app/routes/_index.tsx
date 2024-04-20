import { Box, FormControl, TextField, Button } from "@mui/material";
import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import DataSchemaInputField from "../components/DataSchemaInputField";
import { parseSchemaString } from "~/utils/parseSchemaString";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// TODO: Multiple URLs

export default function Index() {
  const [dataSchema, setDataSchema] = useState<string>(
    `attribute1: value1
attribute2:
  attribute3: value3
`
  );

  const [urls, setUrls] = useState<{ name: string; value: string }[]>([
    { name: "url0", value: "" },
  ]);

  const submitHandler = async () => {
    console.log(parseSchemaString(dataSchema));
    // parseSchemaString(dataSchema);
  };

  const addUrl = (index: number) => {
    setUrls([...urls, { name: "url" + index, value: "" }]);
  };

  const addCategory = (index: number) => {};

  useEffect(() => {
    // console.log(parseStringToObject(str));
    console.log(urls);
  }, [urls]);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <FormControl>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box
            sx={{ padding: "1rem", display: "flex", flexDirection: "column" }}
          >
            {urls.map((url, index) => (
              <Box
                key={index}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <TextField
                  label="URL"
                  variant="outlined"
                  name={"url" + index}
                  value={url.value}
                  onChange={(e) => {
                    setUrls((prevState) =>
                      prevState.map((url) => {
                        if (url.name === e.target.name) {
                          return {
                            name: e.target.name,
                            value: e.target.value,
                          };
                        }
                        return url;
                      })
                    );
                  }}
                />
                {/* TODO: place icon to remove url input */}
              </Box>
            ))}
            <Button variant="contained" onClick={() => addUrl(urls.length)}>
              Add URL
            </Button>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                label="Base Container (Selector)"
                variant="outlined"
                id="base1"
              />
            </Box>
            <Box sx={{ display: "flex" }}>
              <TextField label="Category" variant="outlined" id="cat1" />
              <TextField label="Selector" variant="outlined" id="sel1" />
            </Box>
            <Button variant="contained">Add Attribute</Button>
          </Box>
          <Box sx={{ padding: "1rem" }}>
            <DataSchemaInputField
              value={dataSchema}
              changeValue={setDataSchema}
            />
          </Box>
        </Box>
        <Button variant="contained" onClick={submitHandler}>
          Submit
        </Button>
      </FormControl>
    </div>
  );
}
