import {
  Box,
  CircularProgress,
  CircularProgressProps,
  circularProgressClasses,
} from '@mui/material';

function FacebookCircularProgress(props: CircularProgressProps) {
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) => theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        }}
        size={50}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={50}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

const Loader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <FacebookCircularProgress />
      <br />
    </Box>
  );
};
export default Loader;
