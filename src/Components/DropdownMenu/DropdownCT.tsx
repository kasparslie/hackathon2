import * as React from 'react';
import { Dropdown, DropdownMenuItemType, IDropdownOption, IDropdownStyles } from 'office-ui-fabric-react/lib/Dropdown';

const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: '50vh' } };


const Performer = [
    { key: 'performerHeader', text: 'Performer', itemType: DropdownMenuItemType.Header },
    { key: 'regina_drup', text: 'Regina Drup' },
    { key: 'simon_strand', text: 'Simon Strand' },
    { key: 'test_account', text: 'Test Account' },
    { key: 'piet_palmboom', text: 'Piet Palmboom' },
    { key: 'peter_parasol', text: 'Peter Parasol' },    
  ];
  
const Client = [
  { key: 'clientHeader', text: 'Performer', itemType: DropdownMenuItemType.Header },
  { key: 'regina_drup', text: 'Regina Drup' },
  { key: 'simon_strand', text: 'Simon Strand' },
  { key: 'test_account', text: 'Test Account' },
  { key: 'piet_palmboom', text: 'Piet Palmboom' },
  { key: 'peter_parasol', text: 'Peter Parasol' },  
];

const Status = [
  { key: 'statusHeader', text: 'Status', itemType: DropdownMenuItemType.Header },
  { key: 'open', text: 'Open' },
  { key: 'executed', text: 'Executed' },
  // { key: 'test_account', text: 'Test Account' },
  // { key: 'piet_palmboom', text: 'Piet Palmboom' },
  // { key: 'peter_parasol', text: 'Peter Parasol' },  
];

  export const DropdownCT: React.FunctionComponent = () => {
    const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);
  
    const onChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
      if (item) {
        setSelectedKeys(
          item.selected ? [...selectedKeys, item.key as string] : selectedKeys.filter(key => key !== item.key),
        );
      }
    };
    return (
      <>
      <Dropdown
        placeholder="Regina Drup..."
        label="Performer"
        selectedKeys={selectedKeys}
        // eslint-disable-next-line react/jsx-no-bind
        onChange={onChange}
        multiSelect
        options={Performer}
        styles={dropdownStyles}
      />
  
      <Dropdown
        placeholder="Test Account"
        label="Client"
        selectedKeys={selectedKeys}
        // eslint-disable-next-line react/jsx-no-bind
        onChange={onChange}
        multiSelect
        options={Client}
        styles={dropdownStyles}
      />
      <Dropdown
        placeholder="Open"
        label="Status"
        selectedKeys={selectedKeys}
        // eslint-disable-next-line react/jsx-no-bind
        onChange={onChange}
        multiSelect
        options={Status}
        styles={dropdownStyles}
      />
  
  
  
     </> 
    );
  };
  