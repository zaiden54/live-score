import React, { useState } from 'react';
import { Button, Col, Form, FormLabel, Row } from 'react-bootstrap';
import type { DatePickerType } from '../types/datepicker';

type SelectFormProps = {
  submitHandler: (input: DatePickerType) => void;
};

export default function SearchForm({ submitHandler }: SelectFormProps): JSX.Element {
  const [input, setInput] = useState<DatePickerType>({ from: '', to: '' });
  const inputHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        void submitHandler(input);
      }}
    >
      <Row>
        <Col>
          <FormLabel htmlFor="from-picker">Начальная дата</FormLabel>
          <Form.Control type="date" name="from" id="from-picker" onChange={inputHandler} />
        </Col>
        <Col>
          <FormLabel htmlFor="to-picker">Конечная дата</FormLabel>
          <Form.Control type="date" name="to" id="to-picker" onChange={inputHandler} />
        </Col>
      </Row>
      <Row>
        <Col className='mt-4'>
          <Button type="submit">Submit</Button>
        </Col>
      </Row>
    </Form>
  );
}
