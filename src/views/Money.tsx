import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import TagSection from './Money/TagSection';
import NoteSection from './Money/NoteSection';
import CategorySection from './Money/CategorySection';
import NumPadSection from './Money/NumPadSection';
import useRecords from '../hooks/useRecords';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
const CateWrapper = styled.div`
  background-color: #C1FD78;
`

type Category = '-' | '+'

const defaultBill = {
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: '0'
}
function Money() {
    const [bill, setBill] = useState(defaultBill)

    type Bill = typeof bill
    const onChange = (obj: Partial<Bill>) => {
        setBill({
            ...bill,
            ...obj
        })
    }
    const {addItem} = useRecords()
    const onEnter = () => {
        if (bill.amount !== '0' && bill.tagIds.length > 0) {
            addItem(bill)
            alert('保存成功')
            setBill(defaultBill)
        } else {
            alert('金额或标签不能为空!')
        }
    }
    return (
        <MyLayout>
            <TagSection
                value={bill.tagIds}
                onChange={(tagIds) => onChange({
                    tagIds
                })}
            />
            <NoteSection
                value={bill.note}
                onChange={(note) => onChange({
                    note
                })}
            />
            <CateWrapper>
                <CategorySection
                    value={bill.category}
                    onChange={(category) => onChange({
                        category
                    })}
                />
            </CateWrapper>
            <NumPadSection
                value={bill.amount}
                onChange={(amount) => onChange({
                    amount
                })}
                onEnter={onEnter}
            />
        </MyLayout>
    );
}

export default Money
