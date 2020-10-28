import React, {useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  .output {
   box-shadow: inset 0 -3px 3px -3px rgba(0, 0, 0, 0.3),
   inset 0 3px 3px -3px rgba(0, 0, 0, 0.3);
   color: #333333;
   background-color: #E9FFCC;
   font-size: 36px;
   font-family: Consolas, monospace;
   padding: 6px 12px;
   text-align: right;
  }
`
const Keyboard = styled.div`
  &::after {
    content: '';
    clear: both;
    display: block;
  }
  button {
    border: none;
    width: 25%;
    height: 60px;
    float: left;
    &.zero {
     width: 50%;
    }
    &.first-layer {
     background-color: #eeffd9;
     //background-color: $btnCol;
    }
    &.second-layer {
     background-color: #E0FFBA;
     //background-color: darken($btnCol, 6%);
    }
    &.third-layer {
     background-color: rgb(211,255,156);
     //background-color: darken($btnCol, 12%);
    }
    &.forth-layer {
     background-color: rgb(197,255,125);
     //background-color: darken($btnCol, 18%);
    }
    &.fifth-layer {
     background-color: rgb(183,255,95);
     //background-color: darken($btnCol, 24%);
    }
    &.point {
     background-color: rgb(170,255,64);
     //background-color: darken($btnCol, 30%);
    }
    &.enter {
     height: 120px;
     float: right;
     background-color: rgb(156,255,33);
     //background-color: darken($btnCol, 36%);
    }
    &:active {
     opacity: 0.6;
    }
  }
`

const NumPadSection: React.FC = () => {
    const [output, setOutput] = useState('0')
    const onClickBtn = (event: React.MouseEvent) => {
        const button = event.target as HTMLButtonElement
        const input = button.textContent!
        switch (input) {
            case '清空':
                setOutput('0')
                break
            case '删除':
                setOutput(output.slice(0, -1) || '0')
                break
            case 'ENTER':
                break
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '.':
                const pointInx = output.indexOf('.')
                if (output.length === 16) return;
                if (output === '0') {
                    if ('0123456789'.indexOf(input) > -1) {
                        setOutput(input)
                    } else {
                        setOutput(output + input)
                    }
                    return;
                }
                if (pointInx > -1 && input === '.') return
                setOutput(output + input)
        }
    }
    return (
        <Wrapper>
            <div className="output">{output}</div>
            <Keyboard onClick={onClickBtn}>
                <button className="first-layer">1</button>
                <button className="second-layer">2</button>
                <button className="third-layer">3</button>
                <button className="forth-layer">删除</button>
                <button className="second-layer">4</button>
                <button className="third-layer">5</button>
                <button className="forth-layer">6</button>
                <button className="fifth-layer">清空</button>
                <button className="third-layer">7</button>
                <button className="forth-layer">8</button>
                <button className="fifth-layer">9</button>
                <button className="enter">ENTER</button>
                <button className="forth-layer zero">0</button>
                <button className="point">.</button>
            </Keyboard>
        </Wrapper>
    )
}

export default NumPadSection
