import React from "react";
import styled from "styled-components";
import useTags from '../../hooks/useTags';

const Wrapper = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 14px;
  padding-bottom: 8px;
`
const Labels = styled.div`
    display: flex;
    align-items: flex-end;
    margin-left: 4px;
    flex-wrap: wrap;
    max-height: 100%;
    overflow: auto;
    .label-item {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 8px 8px 0 0;
      padding: 0 18px;
      height: 24px;
      border-radius: 12px;
      background-color: rgba(136, 255, 96, 0.7);
    }
    .selected {
      background-color: rgba(126, 162, 255, 0.9);
    }
`

type Props = {
    value: number[]
    onChange: (selected: number[]) => void
}
const TagSection: React.FC<Props> = (props) => {
    const {tags} = useTags()
    const selectedTagIds = props.value
    const onToggleSelect = (tagId: number) => {
        const idx = selectedTagIds.indexOf(tagId)
        if (idx > -1) {
            props.onChange(selectedTagIds.filter(t => t !== tagId))
        } else {
            props.onChange([...selectedTagIds, tagId])
        }
    }
    const isSelected = (tagId: number) => selectedTagIds.findIndex(name => name === tagId) > -1 ? "selected label-item" : "label-item"
    return (
        <Wrapper>
            <Labels>
                {tags.map((tag) => {
                    return (
                        <div
                            key={tag.id}
                            onClick={() => onToggleSelect(tag.id)}
                            className={isSelected(tag.id)}
                        >
                            {tag.name}
                        </div>
                    )
                })
                }
            </Labels>
        </Wrapper>
    )
}

export default TagSection
