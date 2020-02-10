import React, { Component } from "react";
import Book from "../components/book";
import Jumbotron from "../components/jumbotron";
import Card from "../components/card";
import Footer from "../components/footer";
import { List } from "../components/list";
import { Row, Col, Container } from "../components/grid";
import API from "../utils/API";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount () {
        this.getSavedBooks();
    };

    getSavedBooks = () => {
        API.getSavedBooks().then(res => {
            this.setState({
                books: res.data
            });
        }).catch(err => console.log(err));
    };

    handleBookDelete = id => {
        API.deleteBook(id).then(res => { this.getSavedBooks() });
    };
    render () {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 className="text-center">
                                <strong>Google Books Search</strong>
                            </h1>
                            <h2 className="text-center">These are the books you have curated. Press "View" to see more information on that title. Press "Delete" to ... well, you know ... delete an item from your Saved Books list.</h2>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Card title="Saved Books" icon="bookmark">
                            { this.state.books.length ? (
                                <List>
                                    { this.state.books.map(book => (
                                        <Book
                                            key={ book._id }
                                            title={ book.title }
                                            subtitle={ book.subtitle }
                                            link={ book.link }
                                            authors={ book.authors.join(", ") }
                                            description={ book.description }
                                            image={ book.image }
                                            Button={ () => (
                                                <button
                                                    onClick={ () => this.handleBookDelete(book._id) }
                                                    className="btn btn-dark ml-2"
                                                >
                                                    Delete
                        </button>
                                            ) }
                                        />
                                    )) }
                                </List>
                            ) : (
                                    <h2 className="text-center">You haven't saved any books yet.</h2>
                                ) }
                        </Card>
                    </Col>
                </Row>
                <Footer />
            </Container>
        );
    }
}

export default Saved;