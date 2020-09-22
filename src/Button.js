import * as React from 'react';
import { DefaultButton, PrimaryButton, Stack, IStackTokens } from 'office-ui-fabric-react';



// Example formatting
const stackTokens = { childrenGap: 40 };

const ButtonDefaultExample = props => {
  const { disabled, checked } = props;

  return (
    <Stack horizontal tokens={stackTokens}>
      <DefaultButton text="Standard" onClick={ () =>_alertClicked('default')} allowDisabledFocus disabled={disabled} checked={checked} />
      <PrimaryButton text="Primary" onClick={() => _alertClicked('primar')} allowDisabledFocus disabled={disabled} checked={checked} />
    </Stack>
  );
};

function _alertClicked(buttton) {
  alert(buttton);
}

export default ButtonDefaultExample;