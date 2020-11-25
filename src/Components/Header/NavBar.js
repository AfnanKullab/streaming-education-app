import React from "react";
import * as S from "./style";

const Items = ["Home", "About", "Material", "Contact"];
export default function NavBar() {
  return (
    <S.NavbarWrapper>
      <S.Nav>
        <S.ListItems>
          {Items.map((Item) => (
            <S.Items>
              <S.Link>{Item}</S.Link>
            </S.Items>
          ))}
        </S.ListItems>
      </S.Nav>
    </S.NavbarWrapper>
  );
}
