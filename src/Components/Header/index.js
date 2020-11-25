import React from "react";
import * as S from "./style";
import NavBar from "./NavBar";
import * as I from "../Icon";
import Logo from "../Logo";

export default function Header() {
  return (
    <S.Wrapper>
      <NavBar />
      <Logo />
      <I.IconWrapper>
        <I.FaceBook />
        <I.Twitter />
        <I.Youtube />
      </I.IconWrapper>
    </S.Wrapper>
  );
}
