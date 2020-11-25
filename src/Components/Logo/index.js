import React from "react";
import * as S from "./style";
import Logoicon from "./Logoicon";

export default function Logo() {
  return (
    <S.LogoWrapper>
      <Logoicon />
      <div>
        <span>
          <a>Skooled</a>
        </span>
      </div>
    </S.LogoWrapper>
  );
}
