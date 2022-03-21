import React, { Component } from 'react';
import gotService from '../../services/gotService';
import ItemDetails, {Field} from '../itemDetails';
import { useParams } from 'react-router-dom';



export default class CharacterItem extends Component {
    gotService = new gotService();
    state = {
        selectedChar: 45
    }
    render() {
        console.log(this.state.selectedChar)
        return(
            <ItemDetails 
            itemId={this.state.selectedChar}
            getData={this.gotService.getCharacter}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )
    }

}
