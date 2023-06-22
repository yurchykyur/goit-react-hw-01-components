import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  text-transform: capitalize;

  width: 500px;

  margin-right: auto;
  margin-bottom: 20px;
  margin-left: auto;

  background: rgba(142, 227, 212, 0.22);

  border-spacing: 0;

  @media screen and (max-width: 520px) {
    width: 300px;
    margin: auto;
  }
`;
export const TableThead = styled.thead`
  font-size: 16px;
  line-height: 1.18;

  background-color: #13d4b4;
`;
export const TableTbody = styled.tbody`
  font-size: 14px;
`;
export const TableTr = styled.tr`
  transition: color 250ms ease-in-out;
  :hover {
    color: blue;
  }
`;
export const TableTh = styled.th`
  padding: 6px;

  border-top: 2px solid black;
  border-right: 1px solid black;
  border-bottom: 2px solid black;
  border-left: 1px solid black;
  color: blue;
  :first-of-type {
    border-left: 2px solid black;
  }
  :last-child {
    border-right: 2px solid black;
  }
`;
export const TableTd = styled.td`
  padding: 6px;

  font-weight: 500;
  text-align: center;

  border-bottom: 1px solid gray;
`;
