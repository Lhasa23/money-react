import {useEffect, useState} from 'react';
import createId from '../lib/createId';
import useUpdate from './useUpdate';

const useTags = () => {
    const [tags, setTags] = useState<{ id: number, name: string }[]>([])
    useEffect(() => {
        let localTags = JSON.parse(localStorage.getItem('tags') || '[]')
        if (localTags.length === 0) {
            localTags = [
                {id: createId(), name: '衣'},
                {id: createId(), name: '食'},
                {id: createId(), name: '住'},
                {id: createId(), name: '行'}
            ]
        }
        setTags(localTags)
    }, [])
    useUpdate(() => {
        localStorage.setItem('tags', JSON.stringify(tags))
    }, tags) // 不可变数据原则
    const findTag = (id: number) => {
        return tags.find(tag => tag.id === id)
    }
    const updateTag = (id: number, name:string) => {
        const tagIdx = tags.findIndex(tag => tag.id === id)
        const tagsClone = JSON.parse(JSON.stringify(tags))
        if (tagIdx === -1) {
            setTags(() => [
                ...tagsClone,
                {id, name}
            ])
        } else {
            tagsClone.splice(tagIdx, 1, {id, name})
            setTags(() => tagsClone)
        }
    }
    const deleteTag = (id: number) => {
        setTags(() => tags.filter(tag => tag.id !== id))
    }
    return {
        tags,
        findTag,
        updateTag,
        deleteTag
    }
}
export default useTags
