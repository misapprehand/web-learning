import React from 'react';

import { storiesOf } from '@storybook/react';
import CalcContainer from 'containers/CalcContainer';
import ThemeSelect from 'containers/calc/ThemeSelect';
storiesOf('CalcContainer', module)
    .add('Basic', () => <CalcContainer />)
    .add('ThemeSelect', () => {
      const themes = {'a': 'a', 'b': 'b', 'c': 'c'};
      return (
        <ThemeSelect
          themes={themes}
          onSelect={(selectText) => console.log('onSelect:' + selectText)} />);
    })
;
