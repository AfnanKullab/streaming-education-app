import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
// Navbar styled comp.
export const NavbarWrapper = styled.div`
  margin: auto;
`;
export const Nav = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
export const ListItems = styled.ul`
  list-style: none;
  display: flex;
  &:first-child {
    color: #9e5f1b;
  }
`;

export const Items = styled.li`
  width: 76px;
  height: 8.8vh;
  position: relative;
  box-sizing: border-box;
  overflow: visible;
  color: #130d4c;
  &:hover {
    color: #9e5f1b;
  }
`;
export const Link = styled.a`
  transition: color 0.4s ease 0s;
  curser: pointer;
`;
