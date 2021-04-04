import React from 'react';
import styled from 'styled-components';

interface CellWrapperProps {
  isActive?: boolean;
}

const CellWrapper = styled.div<CellWrapperProps>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: ${(props) => (props.isActive ? '#495057' : '#fff')};
`;

interface CellProps {
  isActive?: boolean;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = (props) => {
  const { isActive, onClick } = props;

  return <CellWrapper onClick={onClick} isActive={isActive} />;
};

export default Cell;
