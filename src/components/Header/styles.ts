import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: flex-end;
  justify-content: flex-end;

  width: 100%;
  height: 120px;

  padding: 24px;

  background-color: ${({ theme }) => theme.colors.shape};
`;
