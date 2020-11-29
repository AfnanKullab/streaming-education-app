import React from "react";
import CardInfo from "./CardInfo";
import * as S from "./style";

export default function Card() {
  return (
    <S.Wrapper>
      <CardInfo day="Monday" />
      <CardInfo day="Tuesday" />
      <CardInfo day="Wendesday" />
      <CardInfo day="Thursday" />
      <CardInfo day="Friday" />
    </S.Wrapper>
  );
}
