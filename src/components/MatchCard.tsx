import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import type { MatchType } from '../types/matches';

type MatchCardProps = {
  match: MatchType;
};

export default function MatchCard({ match }: MatchCardProps): JSX.Element {
  return (
    <Col xs={6}>
      <Card className="text-center mb-4">
        <Card.Header>{match.location}</Card.Header>
        <Card.Body>
          <Card.Title>{`${match.home_name} - ${match.away_name}`}</Card.Title>
          <Card.Text>{match.score}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">{`${match.date} ${match.scheduled}`}</Card.Footer>
      </Card>
    </Col>
  );
}
