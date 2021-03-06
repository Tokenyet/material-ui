import * as React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export default function ColorButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
    </Box>
  );
}
