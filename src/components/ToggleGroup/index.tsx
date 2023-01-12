import { ToggleButtonGroup, ToggleButton } from '@mui/material';

import { ToggleContainer } from './styled';
import { Props } from './types';

const ToggleGroup = ({ toggles, picked, setPicked }: Props) => {
  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newPicked: string) => {
    setPicked(newPicked);
  };

  return (
    <ToggleContainer>
      <ToggleButtonGroup value={picked} exclusive onChange={handleAlignment}>
        {toggles.map((toggle) => (
          <ToggleButton value={toggle} key={toggle} color="primary">
            {toggle}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </ToggleContainer>
  );
};

export default ToggleGroup;
