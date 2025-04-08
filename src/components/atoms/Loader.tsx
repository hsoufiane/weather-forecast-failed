import React from 'react';
import { Box, CircularProgress } from '@mui/material';

export const Loader: React.FC = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <CircularProgress aria-label="Loading" />
  </Box>
);

