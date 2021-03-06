import React from "react";
import { ListItem } from "../list";
import { Row, Col } from "../grid";

function Book ({ title, Subtitle, authors, link, description, image, Button }) {
    return (
        <ListItem>
            <Row className="flex-wrap-reverse">
                <Col size="md-8">
                    <h4 className="font-italic">{ title }</h4>
                    { Subtitle && <h5 className="font-italic">{ Subtitle }</h5> }
                </Col>
                <Col size="md-4">
                    <div className="btn-container">
                        <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={ link }>
                            View
                        </a>
                        <Button />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <p className="font-italic small">Written by { authors }</p>
                </Col>
            </Row>
            <Row>
                <Col size="12 sm-4 md-2">
                    <img className="img-thumbnail img-fluid w-100" src={ image } alt={ title } />
                </Col>
                <Col size="12 sm-8, md-10">
                    <p>{ description }</p>
                </Col>
            </Row>
        </ListItem>
    )
};

export default Book;