import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
// Navbar styled comp.
export const NavbarWrapper = styled.div`
  width: 459px;
  height: 50px;
  overflow-x: visible;
`;
export const Nav = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
export const ListItems = styled.ul`
  &: first-child {
    color: #9e5f1b;
  }
  list-style: none;
  display: flex;
  &:hover {
    color: #9e5f1b;
  }
`;
export const Items = styled.li`
  width: 76px;
  height: 50px;
  position: relative;
  box-sizing: border-box;
  overflow: visible;
`;
export const Link = styled.a`
  color: #130d4c;
  transition: color 0.4s ease 0s;
  curser: pointer;
`;
