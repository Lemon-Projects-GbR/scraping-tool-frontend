import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';

const SocialLinks: React.FC = () => {
  const [urls, setUrls] = useState<string>('');

  const submitHandler = async () => {
    try {
      const urlArray = urls.split(',').filter(url => url !== '');
      const formattedUrlArray = urlArray.map(url => {
        return url.trim().replace(/\n/g, '');
      });

      const response = await fetch('http://localhost:3008/social-links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          urls: formattedUrlArray,
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div>
      <TextField
        label='Url List'
        variant='outlined'
        margin='normal'
        value={urls}
        onChange={e => {
          setUrls(e.target.value);
        }}
        sx={{ width: '500px' }}
        multiline
      />
      <Button variant='contained' onClick={submitHandler}>
        Get Social Links
      </Button>
    </div>
  );
};

export default SocialLinks;
