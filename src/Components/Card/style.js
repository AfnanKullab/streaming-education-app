import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  text-align: center;
  margin: 0 10px 0 10px;
  background-color: #f5cb96;
`;
export const CardInfo = styled.div`
  background-color: #f5cb96;
  color: #130d4c;
  width: 20%;
  height: 51.52vh;
  border-right: 1px solid #130d4c;
  &:last-child {
    border-right: none;
  }
`;
