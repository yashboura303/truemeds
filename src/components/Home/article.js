import React from 'react';
import { Form, Card, Button } from 'react-bootstrap';

export default function Article({ articles }) {
    return articles.map(article => (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={article.image} />
            <Card.Body>
                <Card.Title>{article.name}</Card.Title>
                <Card.Text>
                    Author - {article.author}
                    Cateogry - {article.categoryName}
                </Card.Text>
            </Card.Body>
        </Card>
    ));
}
