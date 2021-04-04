import React from 'react';
import styled from 'styled-components';

interface CellTableProps {
  width: number;
  height: number;
  isActive?: boolean;
}

const TableWrapper = styled.div<CellTableProps>`
  display: inline-grid;
  background-color: ${(props) => (props.isActive ? '#c1c5ca' : '#ced4da')};
  padding: 12px;
  grid-template-columns: repeat(${(props) => props.width}, 20px);
  grid-template-rows: repeat(${(props) => props.height}, 20px);
  gap: 3px;
`;

const CellTable: React.FC<CellTableProps> = (props) => {
  const { width, height, children, isActive } = props;

  return (
    <div>
      <TableWrapper width={width} height={height} isActive={isActive}>
        {children}
      </TableWrapper>
    </div>
  );
};

export default CellTable;
