import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DropdownDate } from './DropdownMenu/DropdownDate'
import { DropdownCT } from './DropdownMenu/DropdownCT';
import { SaveBtn } from './Buttons/SaveBtn';

import { Stack, IStackStyles, IStackTokens } from 'office-ui-fabric-react/lib/Stack';

const textStyles: React.CSSProperties = {
    alignItems: 'center',
    display: 'flex',
    height: 50,
    justifyContent: 'center',
    width: 200,
    padding: 50,
  };
  const dropStyles: React.CSSProperties = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: 50,
    justifyContent: 'center',
    width: 50,
    paddingTop: 50,
    paddingBottom: 50,
    
  };
export const AddTask = () => {

    return (
      <div style={{paddingTop:"120px"}}>
        <Stack>
          <Stack horizontalAlign="center">
            <span>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '50vh',
                }}
              >
                <TextField label="Description" multiline autoAdjustHeight />
              </div>
            </span>

            <span>
              <DropdownDate />
            </span>
            <span>
              <DropdownCT />
            </span>
            <span>
              <SaveBtn />
            </span>
          </Stack>
        </Stack>
      </div>
    );
}