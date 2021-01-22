import * as React from 'react';
import { CompoundButton, Stack, IStackTokens } from 'office-ui-fabric-react';
import { initializeIcons } from '@uifabric/icons';

initializeIcons();
export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

// Example formatting
const stackTokens: IStackTokens = { childrenGap: 40 };

export const CreateTaskBtn: React.FunctionComponent<IButtonExampleProps> = props => {
  const { disabled, checked } = props;

  return (
    <Stack horizontal tokens={stackTokens}>
      <CompoundButton
        primary
        secondaryText="Create a new task."
        disabled={disabled}
        checked={checked}
        iconProps={{iconName: 'TaskLogo'}}        
      >
        Create Task
        
      </CompoundButton>
    </Stack>
  );
};
