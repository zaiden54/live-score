import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import CardList from './components/CardList';
import type { DatePickerType } from './types/datepicker';
import type { QueryOptions } from './types/query';
import type { ApiReturnType, MatchType } from './types/matches';

export default function App(): JSX.Element {
  // const [period, setPeriod] = useState<DatePickerType>({ from: '', to: '' });
  const [matches, setMatches] = useState<MatchType[]>([]);
  const [queryOptions, setQueryOptions] = useState<QueryOptions>({
    method: 'GET',
    url: 'http://livescore-api.com/api-client/scores/history.json',
    params: {
      key: 'nASgnAGMe0IctTUW',
      secret: 'M3HfAbCq4SSB43VrDNI1ooOCoxPRqJNd',
      from: '2023-08-17',
      to: (new Date()).toISOString().split('T')[0],
    },
  });

  const submitHandler = (input: DatePickerType): void => {
    setQueryOptions(prev => ({...prev, from: input.from, to: input.to}))
  };

  useEffect(() => {
    axios
      .request<ApiReturnType>(queryOptions)
      .then((response) => setMatches(prev => [...response.data.data.match]))
      .catch(console.error);
  }, [queryOptions]);

  console.log(queryOptions);

  return (
    <Container className="mt-3">
      <Row>
        <h1>Выберите период проведения матчей</h1>
        <SearchForm submitHandler={submitHandler} />
      </Row>
      <Row className="mt-4">
        <CardList matches={matches} />
      </Row>
    </Container>
  );
}
