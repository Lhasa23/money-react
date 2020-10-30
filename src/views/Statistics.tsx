import Layout from "../components/Layout";
import React, {useState} from 'react';
import CategorySection from './Money/CategorySection';
import useRecords from '../hooks/useRecords';
import styled from 'styled-components';
import useTags from '../hooks/useTags';
import dayjs from 'dayjs';

const CateWrapper = styled.div`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
`
const Item = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 0;
  .tags{
    max-width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

function Statistics() {
    const [category, setCategory] = useState<'-' | '+'>('-')
    const {records} = useRecords()
    const {findTag} = useTags()
    return (
        <Layout>
            <CateWrapper>
                <CategorySection value={category} onChange={(e) => setCategory(e)} />
            </CateWrapper>
            <ol>
                {records.map((r, rIdx) => {
                    return (
                    <Item key={rIdx}>
                        <div className="tags">
                            {r.tagIds.map((tagId, tagIdx) => <span>{tagIdx !== 0 && '，'}{findTag(tagId).name}</span>)}
                        </div>
                        {r.note && <div className="note">
                            {r.note}
                        </div>}
                        <div className="amount">
                            ￥{r.amount}
                        </div>
                        {/*<div className="time">*/}
                        {/*    {dayjs(r.create_time).format('YYYY年MM月DD日')}*/}
                        {/*</div>*/}
                    </Item>
                    )
                })}
            </ol>
        </Layout>
    );
}

export default Statistics
