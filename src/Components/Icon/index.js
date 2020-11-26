import React from "react";
import styled from "styled-components";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImYoutube } from "react-icons/im";

export const IconWrapper = styled.div`
  display: flex;
`;
export const FaceBook = () => {
  return (
    <div>
      <ImFacebook />
    </div>
  );
};

export const Twitter = () => {
  return (
    <div>
      <ImTwitter />
    </div>
  );
};

export const Youtube = () => {
  return (
    <div>
      <ImYoutube />
    </div>
  );
};
