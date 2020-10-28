import React, {useState} from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 14px;
    .top-footer {
      padding: 12px 8px 8px;
      .add-label {
        color: #999999;
        background-color: inherit;
        border: none;
        border-bottom: 1px solid;
      }
    }
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

const TagSection: React.FC = () => {
    const [tags, setTags] = useState<string[]>(['衣','食','住','行'])
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const onAddTag = () => {
        const tagName = window.prompt('请输入新标签名：')
        if (tagName) {
            setTags([...tags, tagName])
        }
    }
    const onToggleSelect = (tag: string) => {
        const idx = selectedTags.indexOf(tag)
        if (idx > -1) {
            setSelectedTags(selectedTags.filter(t => t !== tag))
        } else {
            setSelectedTags([...selectedTags, tag])
        }
    }
    const isSelected = (tag: string) => selectedTags.findIndex(name => name === tag) > -1 ? "selected label-item" : "label-item"
    return (
        <Wrapper>
            <Labels>
                {tags.map((tag) => {
                    return (
                        <div
                            key={tag}
                            onClick={() => onToggleSelect(tag)}
                            className={isSelected(tag)}
                        >
                            {tag}
                        </div>
                    )
                })
                }
            </Labels>
            <div className="top-footer">
                <button onClick={onAddTag} className="add-label">
                    添加标签
                </button>
            </div>
        </Wrapper>
    )
}

export default TagSection
