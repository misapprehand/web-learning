import React from 'react';

import { storiesOf } from '@storybook/react';
import CalcContainer from 'containers/CalcContainer';
import ThemeSelect from 'containers/calc/ThemeSelect';
import Pad from 'containers/calc/Pad';
import layouts from './layouts.json';

storiesOf('CalcContainer', module)
    .add('Basic', () => <CalcContainer />)
    .add('ThemeSelect', () => {
      const themes = {'a': 'a', 'b': 'b', 'c': 'c'};
      return (
        <ThemeSelect
          themes={themes}
          onSelect={(selectText) => console.log('onSelect:' + selectText)} />
      );
    })
    .add('Pad', () => {
      function createMapFromLayout ({layout, callbacks}) {
        const infoMap = new Map();
        const keys = Object.keys(layout);
        keys.forEach(key => {
          infoMap[key] = Object.assign({}, layout[key], {cb: callbacks[key].cb});
        });
        return infoMap;
      }
      const numberClickHandler = (event) => {
        console.log('number click');
      };
      const jsonArray = layouts['layouts'];
      const themes = {};
      const callbacks = {
        'mul-1': {cb: numberClickHandler},
        'mul-2': {cb: numberClickHandler},
        'mul-3': {cb: numberClickHandler},
        'mul-4': {cb: numberClickHandler},
        'mul-5': {cb: numberClickHandler},
        'mul-6': {cb: numberClickHandler},
        'mul-7': {cb: numberClickHandler},
        'mul-8': {cb: numberClickHandler},
        'mul-9': {cb: numberClickHandler},
        'mul-0': {cb: numberClickHandler},
        'mul-+': {cb: numberClickHandler},
        'mul--': {cb: numberClickHandler},
        'mul-*': {cb: numberClickHandler},
        'mul-／': {cb: numberClickHandler},
        'mul-=': {cb: numberClickHandler},
        'mul-clr': {cb: numberClickHandler}
      };

      for (let item of jsonArray) {
        themes[item.title] = createMapFromLayout({layout: item.content, callbacks});
      }

      return (<Pad infoMap={Object.values(themes)[0]} />);
    })
;
