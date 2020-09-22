import * as React from 'react';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';

import Nav from './Nav'

const getTabId = (itemKey) => {
  return `ShapeColorPivot_${itemKey}`;
};

const PivotSeparateExample = () => {
  const [selectedKey, setSelectedKey] = React.useState('home');

  const handleLinkClick = (item) => {
    setSelectedKey(item.props.itemKey);
  };


  return (
    <div>

      <Pivot
        aria-label="Separately Rendered Content Pivot Example"
        selectedKey={selectedKey}
        // eslint-disable-next-line react/jsx-no-bind
        onLinkClick={handleLinkClick}
        headersOnly={true}
        getTabId={getTabId}
      >
        <PivotItem headerText="Home" itemKey="home" />
        <PivotItem headerText="Square red" itemKey="squareRed" />
        <PivotItem headerText="Rectangle green" itemKey="rectangleGreen" />
      </Pivot>
  <Nav selectedKey={selectedKey}/>


    </div>
  );
};

export default PivotSeparateExample;
