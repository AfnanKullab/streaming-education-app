import React from "react";
import * as S from "./style";
import Logoicon from "./Logoicon";

export default function Logo() {
  return (
    <S.LogoWrapper>
      <Logoicon />

      <S.SpanLogo>Skooled</S.SpanLogo>
    </S.LogoWrapper>
  );
}
