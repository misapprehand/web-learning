import React from 'react';

import { storiesOf } from '@storybook/react';
import CalcContainer from 'containers/CalcContainer';
import ThemeSelect from 'containers/calc/ThemeSelect';
storiesOf('CalcContainer', module)
    .add('Basic', () => <CalcContainer />)
    .add('ThemeSelect',()=>{
        return <ThemeSelect />;
    })
;
