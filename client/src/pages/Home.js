import React, { Component } from "react";
import Book from "../components/book";
import Jumbotron from "../components/jumbotron";
import Card from "../components/card";
import Footer from "../components/footer";
import Form from "../components/form";
import { List } from "../components/list";
import { Row, Col, Container } from "../components/grid";
import API from "../utils/API";

class Home extends Component {
  state = {
    books: [],
    query: "",
    message: "Enter the Book title"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  getBooks = () => {
    API.getBooks(this.state.query)
      .then(res => {
        console.log(`The response is ${res.data.length}`);
        this.setState({
          books: res.data
        });
      })
      .catch(() => {
        this.setState({
          books: [],
          message: "No books were found!"
        });
      });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveABook({
      id: book.id,
      title: book.volumeInfo.title,
      url_link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">Search Google Books</h1>
              <h3 className="text-center">
                Search a Book with entering Book title"
              </h3>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="Book Search" icon="fas fa-search">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                query={this.state.query}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results" icon="fas fa-book-open">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-warning ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;
