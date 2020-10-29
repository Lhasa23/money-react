import React, {useEffect, useRef, useState} from 'react';
import useTags from '../useTags';
import {
    useParams,
    useHistory
} from 'react-router-dom';
import Layout from '../components/Layout';
import MyIcon from '../components/MyIcon';
import styled from 'styled-components';
import createId from '../lib/createId';

const Header = styled.header`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  font-size: 16px;
  padding: 12px 10px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .my-icon {
    height: 1.5em;
    width: 1.5em;
  }
  .title {
    transform: translate(-20%);
  }
`
const Main = styled.div`
  font-size: 14px;
  background-color: #e7ffb3;
  color: #333333;
  display: flex;
  padding: 0 0 0 16px;
  align-items: center;
  margin-top: 2px;
  span {
    padding-right: 16px;
  }
  input {
    border: none;
    background-color: #E9FFCC;
    padding: 16px 10px;
    flex-grow: 1;
    margin-left: 5px;
  }
`
const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  margin-top: 24px;
  .add-label {
    height: 40px;
    padding: 0 10px;
    border: none;
    border-radius: 5px;
  }
  .primary {
    background-color: #B3FF56;
  }
  .danger {
    background-color: #ff4040;
  }
`

const Tag: React.FC = () => {
    const count = useRef(0)
    let history = useHistory()
    const {findTag, updateTag, deleteTag} = useTags()
    const [tagName, setTagName] = useState('')
    let {id: idString} = useParams()
    useEffect(() => {
        if (+idString !== -1) {
            const tag = findTag(+idString)
            if (tag && count.current === 0) {
                count.current += 1
                setTagName(tag.name)
            }
        }
    }, [findTag])
    const onClickAdd = (id: number, name: string) => {
        if (!name) {
            alert('标签名不能为空')
            return
        }
        if (id === -1) {
            id = createId()
        }
        updateTag(id, name)
        history.goBack()
    }
    const onClickDelete = (id: number) => {
        deleteTag(id)
        history.goBack()
    }

    return (
        <Layout>
            <Header>
                <MyIcon
                    className="my-icon"
                    name="left"
                    onClick={() => history.goBack()}
                />
                <span className="title">{+idString === -1 ? '新增' : '编辑'}标签</span>
                <span/>
            </Header>
            <Main>
                <span>标签名</span>
                <input
                    type="text"
                    placeholder="请输入标签"
                    onChange={(e) => setTagName(e.target.value)}
                    value={tagName}
                />
            </Main>
            <Footer>
                <button
                    className="add-label primary"
                    onClick={() => onClickAdd(+idString, tagName)}
                >保存标签</button>
                {+idString !== -1
                    && <button
                        className="add-label danger"
                        onClick={() => onClickDelete(+idString)}
                    >删除标签</button>
                }
            </Footer>
        </Layout>
    );
}

export default Tag
