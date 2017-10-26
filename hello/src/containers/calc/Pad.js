import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pad extends Component {
    createPad = (infoMap)=>{
        const buttonBars = [];
        function getInfoFromMap ({map, rowId}) {
            const infos = [];
            for (let k of Object.keys(map)) {
                const v = map[k];
                if (v.parent === rowId) {
                    infos.push(v);
                }
            }
            return infos;
        }
        let infos = getInfoFromMap({map: infoMap, rowId: 'number-pad-r1'});
        buttonBars.push(this.createButtonBar({infos: infos}));

        infos = getInfoFromMap({map: infoMap, rowId: 'number-pad-r2'});
        buttonBars.push(this.createButtonBar({infos: infos}));

        infos = getInfoFromMap({map: infoMap, rowId: 'number-pad-r3'});
        buttonBars.push(this.createButtonBar({infos: infos}));

        infos = getInfoFromMap({map: infoMap, rowId: 'number-pad-r4'});
        buttonBars.push(this.createButtonBar({infos: infos}));
        return buttonBars;
    }
    createButtonBar= ({infos})=> {
        const element = this.createButtonBarContainer({infos});
        return element;
    }
    createButtonBarContainer= ({infos})=> {
        const buttonItems = ()=>{
            const items = [];
            for (let info of infos) {
                items.push(this.createButtonItemInGroup({info}));
            }
            return items;
        };
        return (
           <div type='button' className='btn-group btn-group-justified calc-pad' role='group' >
                {
                    buttonItems()
                }
           </div>
        );
    }
    createButtonItemInGroup =({info})=> {
        return (
                <div className='btn-group' role='group'>{
                    this.createButtonInButtonBar({info})
                }
                </div>
        );
    }

    createButtonInButtonBar =({info})=> {
        return (
                <button type='button' className="btn btn-default" value={info.value} onClick={info.cb}>
                {info.value}
                </button>
        );
    }

    render(){
        return (<div>{
                   this.createPad(this.props.infoMap)
              }
            </div>);
  }
}
Pad.protypes = {
  infoMap: PropTypes.object.isRequired
};
export default Pad;
