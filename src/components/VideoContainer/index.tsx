import { CardMedia } from '@mui/material';
import Dialog from '@mui/material/Dialog';

import { Props } from './types';

const VideoContainer = ({ onClose, open }: Props) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <CardMedia component="video" controls src={`/assets/video.mp4`} autoPlay />
    </Dialog>
  );
};

export default VideoContainer;
