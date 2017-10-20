import React from 'react';

import { storiesOf } from '@storybook/react';
import CalcContainer from 'containers/CalcContainer';

storiesOf('CalcContainer', module)
    .add('Basic', () => <CalcContainer />);
