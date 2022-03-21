import React, { Component } from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import { useNavigate } from 'react-router-dom';



class BooksPage extends Component {

    gotService = new gotService();

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <ItemList
                onItemSelected={(itemId) => {
                    this.props.navigate(`/books/${itemId}`)
                    console.log(this.props.navigate(`/books/${itemId}`))
                }}
                getData={this.gotService.getAllBooks}
                renderItem={({name}) => `${name}`} />
        )
    }
}

function Books(props) {
    let navigate = useNavigate();
    console.log(navigate)
    return <BooksPage {...props} navigate={navigate} />
}

export default Books;