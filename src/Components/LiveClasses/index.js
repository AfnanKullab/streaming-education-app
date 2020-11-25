import React from "react";
import styled from "styled-components";
import * as T from "../typography/index";

const Liveclasses = styled.div`
  background-color: #eeeeee;
  color: ${(props) => props.theme.pallette.primary};
  height: 14.08vh;
  width: 100%;
  text-align: center;
`;

export default function LiveClasses() {
  return (
    <Liveclasses>
      <T.H3>Live Online Classes</T.H3>
    </Liveclasses>
  );
}
