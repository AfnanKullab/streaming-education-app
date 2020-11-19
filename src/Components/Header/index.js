import React from "react";
import * as S from "./style";
import NavBar from "./NavBar";
import * as I from "../Icon";
import Logo from "../Logo";

export default function Header() {
  return (
    // <S.Nav>aaa</S.Nav>;
    <S.Wrapper>
      <NavBar />
      <Logo />
      <div>
        <I.FaceBook />
        <I.Twitter />
      </div>
    </S.Wrapper>
  );
}
