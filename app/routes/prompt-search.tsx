import { FC, useState } from 'react';
import { json, useLoaderData } from '@remix-run/react';
import { TextField, Button, Container, Box } from '@mui/material';
import axios from 'axios';

export async function loader() {
  return json({ API_BASE_URL: process.env.API_BASE_URL });
}

const AiSearch: FC = () => {
  const data = useLoaderData<typeof loader>();
  const [url, setUrl] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');

  return (
    <Container>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='top'
        height='100vh'
      >
        <TextField
          label='Input'
          variant='outlined'
          margin='normal'
          value={url}
          onChange={e => setUrl(e.target.value)}
          sx={{ width: '500px' }}
        />
        <TextField
          label='Text Field'
          variant='outlined'
          margin='normal'
          multiline
          rows={4}
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          sx={{ width: '500px' }}
        />
        <Button
          variant='contained'
          color='primary'
          style={{ marginTop: '16px' }}
          onClick={async () => {
            try {
              axios.post(
                `${data.API_BASE_URL}/ai-search`,
                {
                  url: url,
                  prompt: prompt,
                },
                {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                },
              );
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default AiSearch;
