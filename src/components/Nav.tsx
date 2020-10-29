import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import MyIcon from "./MyIcon";

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  ul {
    display: flex;
    li {
      width: 33.3333%;
      text-align: center;
      a {
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &.selected {
          background-color: rgba(126,162,255,.6);
        }
      }
      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink exact to="/tags" activeClassName="selected">
                        <MyIcon name="label" />
                        标签
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName="selected">
                        <MyIcon name="plus" />
                        记账
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <MyIcon name="chart" />
                        统计
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav
