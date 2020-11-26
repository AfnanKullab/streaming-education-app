import React from "react";
import styled from "styled-components";
import * as T from "../typography/index";

const Liveclasses = styled.div`
  background-color: #f5cb96;
  color: #130d4c;
  height: 12.8vh;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function LiveClasses() {
  return (
    <Liveclasses>
      <T.H3>Live Online Classes</T.H3>
    </Liveclasses>
  );
}
