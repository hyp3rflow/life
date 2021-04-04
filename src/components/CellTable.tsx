import React from 'react';
import styled from 'styled-components';

interface CellTableProps {
  width: number;
  height: number;
}

const TableWrapper = styled.div<CellTableProps>`
  display: inline-grid;
  background-color: #ced4da;
  padding: 12px;
  grid-template-columns: repeat(${(props) => props.width}, 20px);
  grid-template-rows: repeat(${(props) => props.height}, 20px);
  gap: 3px;
`;

const CellTable: React.FC<CellTableProps> = (props) => {
  const { width, height, children } = props;

  return (
    <div>
      <TableWrapper width={width} height={height}>
        {children}
      </TableWrapper>
    </div>
  );
};

export default CellTable;
