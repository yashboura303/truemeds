import React from 'react';
import { Form, Card, Button, Col } from 'react-bootstrap';

export default function Article({ articles }) {
    if (!articles) {
        return null;
    }
    return articles.map(article => (
        <Col key={article.name} className="mt-3">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={article.image} />
                <Card.Body>
                    <Card.Title>{article.name}</Card.Title>
                    <Card.Text>
                        <strong>Author</strong> - {article.author}
                        <br />
                        <strong>Category</strong>- {article.categoryName}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    ));
}
