import styled from "styled-components";
import {Link} from "react-router-dom";
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
      padding: 4px 0;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
                    <Link to="/tags">
                        <MyIcon name="label" />
                        标签
                    </Link>
                </li>
                <li>
                    <Link to="/money">
                        <MyIcon name="plus" />
                        记账
                    </Link>
                </li>
                <li>
                    <Link to="/statistics">
                        <MyIcon name="chart" />
                        统计
                    </Link>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav
