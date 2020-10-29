import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import TagSection from './Money/TagSection';
import NoteSection from './Money/NoteSection';
import CategorySection from './Money/CategorySection';
import NumPadSection from './Money/NumPadSection';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

type Category = '-' | '+'

function Money() {
    const [bill, setBill] = useState({
        tagIds: [] as number[],
        note: '',
        category: '+' as Category,
        amount: '0'
    })

    type Bill = typeof bill
    const onChange = (obj: Partial<Bill>) => {
        setBill({
            ...bill,
            ...obj
        })
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
            <CategorySection
                value={bill.category}
                onChange={(category) => onChange({
                    category
                })}
            />
            <NumPadSection
                value={bill.amount}
                onChange={(amount) => onChange({
                    amount
                })}
                onEnter={() => {
                }}
            />
        </MyLayout>
    );
}

export default Money
