import {useEffect, useState} from 'react';
import useUpdate from './useUpdate';

export type RecordItem = {
    tagIds: number[]
    note: string
    category: '-' | '+'
    amount: string
    create_time: string // ISO 8601
}
type Bill = Omit<RecordItem, 'create_time'>
const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([])
    useEffect(() => {
        setRecords(JSON.parse(localStorage.getItem('RecordList') || '[]'))
    }, [])
    const addItem = (record: Bill) => {
        const create_time = (new Date()).toISOString()
        setRecords([...records, {...record, create_time}])
    }
    useUpdate(() => {
        localStorage.setItem('RecordList', JSON.stringify(records))
    }, [records])
    return {records, addItem}
}

export default useRecords
