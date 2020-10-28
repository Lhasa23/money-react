import React, {useState} from "react";
import styled from "styled-components";

const Wrapper = styled.section`
    font-size: 14px;
    background-color: #E9FFCC;
    color: #333333;
    display: flex;
    padding: 0 16px;
    align-items: center;
    span {
        padding-right: 16px;
    }
    input {
      border: none;
      background-color: #E9FFCC;
      padding: 16px 0;
      flex-grow: 1;
    }
`

const NoteSection: React.FC = () => {
    const [note, setNote] = useState('')
    /*
    * 非受控型
    *
    * const refInput = useRef<HTMLInputElement>(null)
    * const onBlur = () => {
    *   if (refInput.current) {
    *       setNote(refInput.current.value)
    *   }
    * }
    *
    * <input type="text" placeholder="请在这里添加备注"
            ref={refInput}
            defaultValue={note}
            onBlur={onBlur}
        />
    * */
    return (
        <Wrapper>
            <span>备注</span>
            <input type="text" placeholder="请在这里添加备注"
                   value={note}
                   onChange={(e) => setNote(e.target.value)}
            />
        </Wrapper>
    )
}

export default NoteSection
