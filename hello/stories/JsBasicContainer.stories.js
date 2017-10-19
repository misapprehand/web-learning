import React from 'react';

import { storiesOf } from '@storybook/react';
import JsBasicContainer from 'containers/JsBasicContainer';

storiesOf('JsBasicContainer', module)
    .add('Basic', () => <JsBasicContainer />);
