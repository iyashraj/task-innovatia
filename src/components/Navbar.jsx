import React from "react";
import styled from "styled-components";
import Logo from "../assets/gym_logo.png";
import { BsCameraVideo } from "react-icons/bs";
import { FaRegNewspaper } from "react-icons/fa";
import { GiRunningNinja } from "react-icons/gi";
import { CgMore } from "react-icons/cg";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <NavLists>
      <img
        src={Logo}
        alt="gym_logo"
      />
      <NavItemsWrapper>
        <NavItem>
          <BsCameraVideo />
          <li>LIVE</li>
        </NavItem>
        <NavItem>
          <FaRegNewspaper />
          <li>MEMBERSHIP</li>
        </NavItem>
        <NavItem>
          <GiRunningNinja />
          <li>PLANS</li>
        </NavItem>
        <NavItem>
          <CgMore />
          <li>MORE</li>
        </NavItem>
      </NavItemsWrapper>
      <LoginUser>
        <FaUserAlt />
        <li>Login</li>
      </LoginUser>
    </NavLists>
  );
};

export default Navbar;

const NavLists = styled.div`
  position: fixed;
  background-color: #dedede;
  transition: 0.2s;
  width: 100vw;
  height: 60px;
  display: flex;
  list-style: none;
  justify-content: space-around;
  padding-top: 10px;
  box-shadow: 1px 1px 5px 3px gray;
  li {
    font-size: 14px;
    cursor: pointer;
    :hover {
      color: orange;
    }
  }
  img{
    height: 60px;
    width: 60px;
    margin-top: -10px;
    cursor: pointer;
  }
`;

const NavItemsWrapper = styled.div`
  display: flex;
  gap: 5rem;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  margin-top: -15px;
`;
const LoginUser = styled.div`

display: flex;
gap: 10px;
margin-top: 15px;
`