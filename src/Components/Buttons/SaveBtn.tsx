import * as React from 'react';
import { DefaultButton, PrimaryButton, Stack, IStackTokens } from 'office-ui-fabric-react';

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

// Example formatting
const stackTokens: IStackTokens = { childrenGap: 40 };

export const SaveBtn: React.FunctionComponent<IButtonExampleProps> = props => {
  const { disabled, checked } = props;

  return (
    <div>
      <Stack horizontal tokens={stackTokens}>
        {/* <DefaultButton text="Standard" onClick={_alertClicked} allowDisabledFocus disabled={disabled} checked={checked} /> */}
        <div style={{paddingTop: '10px'}}><PrimaryButton
          text="Save"
          onClick={_alertClicked}
          allowDisabledFocus
          disabled={disabled}
          checked={checked}
        />
        </div>
      </Stack>
    </div>
  );
};

function _alertClicked(): void {
  alert('Save');
}
