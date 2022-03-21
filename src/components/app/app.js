import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import { BooksPage, CharacterPage, HousesPage, BooksItem, CharacterItem } from '../Pages';
import gotService from '../../services/gotService';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default class App extends Component {
    gotService = new gotService()
    state = {
        display: true,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onToggleRandom = () => {
        this.setState((state) => {
            return {
                display: !state.display
            }
        });
    };


    render() {
        const randomChar = this.state.display ? <RandomChar /> : null

        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <Router>

                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {randomChar}
                            <Button
                                color="primary"
                                onClick={this.onToggleRandom}>
                                Toggle random character
                            </Button>
                        </Col>
                    </Row>

                    <Routes>
                        <Route path='/characters' element={<CharacterPage render />} />
                        <Route path='/characters/:id' element={<CharacterItem />} />
                        <Route path='/houses' element={<HousesPage />} />
                        <Route path='/books' element={<BooksPage />} />
                        <Route path='/books/:id' element={
                            (match) => {
                                const { id } = match.params;
                                return <BooksItem bookId={id} />
                            }} />
                    </Routes>
                </Container>
            </Router>
        )

    }
};

