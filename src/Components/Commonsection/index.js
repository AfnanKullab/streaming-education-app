import React from "react";
import * as T from "../../Components/typography/index";
import * as S from "./style";

export default function Commonsection(props) {
  const { title } = props;
  return (
    <S.Wrapper>
      <T.H2>{title}</T.H2>
      <S.Line />
      <T.P>
        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font. Feel free to drag and drop me anywhere you
        like on your page.
      </T.P>
    </S.Wrapper>
  );
}
