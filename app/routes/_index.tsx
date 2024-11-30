import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, FormControl, TextField, Button, Typography } from '@mui/material';
import type { MetaFunction } from '@remix-run/node';
import DataSchemaInputField from '../components/DataSchemaInputField';
import { parseSchemaString } from '~/utils/parseSchemaString';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

// TODO: Save scheme feature
// TODO: Hardcoded attributes

/* 
title: $('.jumbotron > h2').text()
attribute2:
  productName: $('.title').text()
*/

const Index: React.FC = () => {
  const [dataScheme, setDataScheme] = useState<string>(
    `attribute1: value1
attribute2:
  attribute3: value3
`,
  );

  const [urls, setUrls] = useState<{ name: string; value: string }[]>([
    { name: 'url0', value: '' },
  ]);

  const [baseContainerSelector, setBaseContainerSelector] =
    useState<string>('');

  const [attributes, setAttributes] = useState<
    {
      inputName: string;
      value: { attrName: string; selector: string };
    }[]
  >([{ inputName: 'name0', value: { attrName: '', selector: '' } }]);

  const submitHandler = async () => {
    try {
      const response = await axios.post('http://localhost:3008/query', {
        urls: urls.filter(url => url.value !== '').map(url => url.value),
        baseContainer: baseContainerSelector,
        scheme: parseSchemaString(dataScheme),
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const addUrl = (index: number): void => {
    setUrls([...urls, { name: 'url' + index, value: '' }]);
  };

  const addAttribute = (index: number): void => {
    setAttributes([
      ...attributes,
      {
        inputName: 'name' + index,
        value: { attrName: '', selector: '' },
      },
    ]);
  };

  useEffect(() => {
    console.log(attributes);
  }, [attributes]);

  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        lineHeight: '1.8',
      }}
    >
      <FormControl sx={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <Box
            sx={{
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              // alignItems: 'center',
            }}
          >
            {urls.map((url, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <TextField
                  label='URL'
                  variant='outlined'
                  name={'url' + index}
                  value={url.value}
                  onChange={e => {
                    setUrls(prevState =>
                      prevState.map(url => {
                        if (url.name === e.target.name) {
                          return {
                            name: e.target.name,
                            value: e.target.value,
                          };
                        }
                        return url;
                      }),
                    );
                  }}
                />
                {/* TODO: place icon to remove url input */}
              </Box>
            ))}
            <Button variant='contained' onClick={() => addUrl(urls.length)}>
              Add URL
            </Button>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <TextField
                label='Base Container (Selector)'
                variant='outlined'
                id='base1'
                value={baseContainerSelector}
                onChange={e => setBaseContainerSelector(e.target.value)}
              />
            </Box>
            <Typography variant='body1'>Hardcoded Attributes</Typography>
            {attributes.map((attr, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                  }}
                >
                  <TextField
                    label='Name'
                    variant='outlined'
                    name={attr.inputName}
                    value={attr.value.attrName}
                    onChange={e => {
                      setAttributes(prevState =>
                        prevState.map(attr => {
                          if (attr.inputName === e.target.name) {
                            return {
                              inputName: e.target.name,
                              value: {
                                attrName: e.target.value,
                                selector: attr.value.selector,
                              },
                            };
                          }
                          return attr;
                        }),
                      );
                    }}
                  />
                  <TextField
                    label='Value'
                    variant='outlined'
                    name={attr.inputName}
                    value={attr.value.selector}
                    onChange={e => {
                      setAttributes(prevState =>
                        prevState.map(attr => {
                          if (attr.inputName === e.target.name) {
                            return {
                              inputName: e.target.name,
                              value: {
                                attrName: attr.value.attrName,
                                selector: e.target.value,
                              },
                            };
                          }
                          return attr;
                        }),
                      );
                    }}
                  />
                </Box>
              </Box>
            ))}
            <Button
              variant='contained'
              onClick={() => addAttribute(attributes.length)}
            >
              Add Attribute
            </Button>
          </Box>

          <Box sx={{ padding: '1rem' }}>
            <DataSchemaInputField
              value={dataScheme}
              changeValue={setDataScheme}
            />
          </Box>
        </Box>
        <Button variant='contained' onClick={submitHandler}>
          Submit
        </Button>
      </FormControl>
    </div>
  );
};

export default Index;
