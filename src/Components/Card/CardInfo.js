import React from "react";
import * as S from "./style";
import * as T from "../../Components/typography/index";

export default function CardInfo(props) {
  const { day } = props;
  return (
    <S.CardInfo>
      <T.H5>{day}</T.H5>
      <T.H4>I'm a Class Title</T.H4>
      <T.P>I'm an item. Click here to edit me</T.P>
      <T.H6>Teacher's Name</T.H6>
      <T.P>9 am - 45 min</T.P>
    </S.CardInfo>
  );
}
