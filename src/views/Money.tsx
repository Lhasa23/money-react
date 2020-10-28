import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";
import TagSection from "./Money/TagSection";
import NoteSection from "./Money/NoteSection";
import CategorySection from "./Money/CategorySection";
import NumPadSection from "./Money/NumPadSection";


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
    return (
        <MyLayout>
            <TagSection />
            <NoteSection />
            <CategorySection />
            <NumPadSection />
        </MyLayout>
    );
}

export default Money
