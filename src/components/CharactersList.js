import React from 'react';
import { addCharacterById } from '../actions';
import { connect } from 'react-redux';

class CharactersList extends React.Component {
    render() {
        return (
            <div>
                <h4>Characters</h4>
                
                <ul className="list-group">
                    { this.props.characters.map(character => (
                        <li key={character.id} className="list-group-item">
                            <div className="list-item">{character.name}</div>
                            <div onClick={() => this.props.addCharacterById(character.id)} className="list-item right-button">
                                +
                            </div>
                        </li>
                    )) }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        characters: state.characters
    };
}

export default connect(mapStateToProps, { addCharacterById })(CharactersList);