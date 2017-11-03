import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    ButtonGroup,
    ButtonToolbar,
    Button
} from 'react-bootstrap';
import shortid from 'shortid';

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
            <ButtonToolbar key={shortid.generate()} bsClass='btn-group-justified calc-pad'>
                {
                    buttonItems()
                }
            </ButtonToolbar>
        );
    }
    createButtonItemInGroup =({info})=> {
        return (
            <ButtonGroup key={shortid.generate()}>{
                this.createButtonInButtonBar({info})
            }
            </ButtonGroup>
        );
    }

    createButtonInButtonBar =({info})=> {
        return (
            <Button value={info.value} onClick={info.cb}>
                {info.value}
            </Button>
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
