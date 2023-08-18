import type { SetStateAction } from 'react';
import React from 'react';
import { Pagination } from 'react-bootstrap';

type CardPaginationProps = {
  setPage: React.Dispatch<SetStateAction<number>>;
};

export default function CardPagination({ setPage }: CardPaginationProps): JSX.Element {
  return (
    <Pagination>
      <Pagination.Prev
        className="col-6"
        style={{ textAlign: 'center' }}
        onClick={(): void => setPage((prev) => prev - 1)}
      >
        Раньше
      </Pagination.Prev>
      <Pagination.Next
        className="col-6"
        style={{ textAlign: 'center' }}
        onClick={(): void => setPage((prev) => prev + 1)}
      >
        Позже
      </Pagination.Next>
    </Pagination>
  );
}
