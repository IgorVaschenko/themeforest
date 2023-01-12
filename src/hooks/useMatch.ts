import { useMediaQuery, useTheme } from '@mui/material';

const useMatch = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  return { isMatch };
};

export default useMatch;
