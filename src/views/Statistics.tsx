import Layout from "../components/Layout";
import React, {useState} from 'react';
import CategorySection from './Money/CategorySection';
import useRecords, {RecordItem} from '../hooks/useRecords';
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
  padding: 10px;
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
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px;
`

function Statistics() {
    const [category, setCategory] = useState<'-' | '+'>('-')
    const {records} = useRecords()
    const {findTag} = useTags()
    // 桶排序分组
    const hash: {[K: string]: RecordItem[]} = {}
    const classifyRecords = records.filter(r => r.category === category)

    classifyRecords.forEach(r => {
        const key = dayjs(r.create_time).format('YYYY-MM-DD')
        if (!(key in hash)) {
            hash[key] = []
        }
        hash[key].push(r)
    })
    const group = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0
        if (a[0] > b[0]) return -1
        if (a[0] < b[0]) return 1
        return 0
    })
    return (
        <Layout>
            <CateWrapper>
                <CategorySection value={category} onChange={(e) => setCategory(e)} />
            </CateWrapper>
            {group.map(([time, records]) => {
                    return (<div>
                        <Header>{time}</Header>
                        <ol>
                            {records.map((r, rIdx) => {
                                return (
                                    <Item key={rIdx}>
                                        <div className="tags">
                                            {r.tagIds.map((tagId, tagIdx) => <span key={tagId}>{tagIdx !== 0 && '，'}{findTag(tagId).name}</span>)}
                                        </div>
                                        {r.note && <div className="note">
                                            {r.note}
                                        </div>}
                                        <div className="amount">
                                            ￥{r.amount}
                                        </div>
                                    </Item>
                                )
                            })}
                        </ol>
                    </div>)
            })}
        </Layout>
    );
}

export default Statistics
