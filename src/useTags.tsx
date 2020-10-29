import {useState} from 'react';
import createId from './lib/createId';

const defaultTags = [
    {id: createId(), name: '衣'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId(), name: '行'}
]
const useTags = () => {
    const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags)
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0]
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
        const tagIdx = tags.findIndex(tag => tag.id === id)
        const tagsClone = JSON.parse(JSON.stringify(tags))
        tagsClone.splice(tagIdx, 1)
        setTags(() => tagsClone)
    }
    return {
        tags,
        findTag,
        updateTag,
        deleteTag
    }
}
export default useTags
