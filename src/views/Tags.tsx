import Layout from "../components/Layout";
import React from "react";
import useTags from '../hooks/useTags';
import styled from 'styled-components';
import MyIcon from '../components/MyIcon';
import {Link} from 'react-router-dom';

const Labels = styled.div`
  a {
    background-color: white;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    .label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      min-height: 44px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`
const BtnWrapper = styled.div`
  text-align: center;
  padding: 10px 0;
  margin-top: 24px;
  .add-label {
    height: 40px;
    padding: 0 10px;
    border: none;
    background-color: #B3FF56;
    border-radius: 5px;
  }
`

function Tags() {
    const {tags} = useTags()
    return (
        <Layout>
            {tags.map(tag => {
                return (
                    <Labels key={tag.id}>
                        <Link to={'/tags/' + tag.id}>
                            <span className="label">{tag.name}</span>
                            <MyIcon name="right" />
                        </Link>
                    </Labels>)
                })
            }
            <BtnWrapper>
                <Link to='/tags/-1'>
                    <button className="add-label">新增标签</button>
                </Link>
            </BtnWrapper>
        </Layout>
    );
}

export default Tags
