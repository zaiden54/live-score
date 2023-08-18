import React from 'react';
import { Container, Row } from 'react-bootstrap';
import type { MatchType } from '../types/matches';
import MatchCard from './MatchCard';

type CardListProps = {
  matches: MatchType[];
};

export default function CardList({ matches }: CardListProps): JSX.Element {
  return (
    <Container>
      <Row>
        {matches.map((el) => (
          <MatchCard key={el.id} match={el}/>
        ))}
      </Row>
    </Container>
  );
}
