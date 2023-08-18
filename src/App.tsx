import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import CardList from './components/CardList';
import type { DatePickerType } from './types/datepicker';
import type { ApiReturnType, MatchType } from './types/matches';
import CardPagination from './components/CardPagination';

export default function App(): JSX.Element {
  const [period, setPeriod] = useState<DatePickerType>({ from: '2023-08-17', to: new Date().toISOString().split('T')[0] });
  const [matches, setMatches] = useState<MatchType[]>([]);
  const [currentPage, setPage] = useState(1);

  const submitHandler = (input: DatePickerType): void => {
    setPeriod((prev) => ({ ...prev, from: input.from, to: input.to }));
  };

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'http://livescore-api.com/api-client/scores/history.json',
      params: {
        key: 'nASgnAGMe0IctTUW',
        secret: 'M3HfAbCq4SSB43VrDNI1ooOCoxPRqJNd',
        page: currentPage,
        from: period.from,
        to: period.to,
      },
    };
    axios
      .request<ApiReturnType>(options)
      .then((response) => setMatches([...response.data.data.match]))
      .catch(console.error);
  }, [period, currentPage]);

  return (
    <Container className="mt-3">
      <Row>
        <h1>Выберите период проведения матчей</h1>
        <SearchForm submitHandler={submitHandler} />
      </Row>
      <Row className="mt-4">
        <CardList matches={matches} />
      </Row>
      <Row>
        <CardPagination setPage={setPage} />
      </Row>
    </Container>
  );
}
