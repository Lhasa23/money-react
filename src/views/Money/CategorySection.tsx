import React, {useState} from 'react';
import styled from 'styled-components';

const Section = styled.ul`
  font-size: 24px;
  background-color: #C1FD78;
  display: flex;
  text-align: center;
　 li {
    width: 50%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
　　  &.selected::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background-color: #616161;
      }
  }
`

const CategorySection: React.FC = () => {
    const categoryMap = {'-': '支出', '+': '收入'}
    type Keys = keyof typeof categoryMap
    const [categoryList] = useState<Keys[]>(['-', '+'])
    const [category, setCategory] = useState('-') // + income - outcome
    return (
        <Section>
            {categoryList.map(c => {
                return (
                    <li
                        className={category === c ? 'selected' : ''}
                        onClick={() => setCategory(c)}
                        key={c}
                    >
                        {categoryMap[c]}
                    </li>)
            })}
        </Section>
    )
}

export default CategorySection
