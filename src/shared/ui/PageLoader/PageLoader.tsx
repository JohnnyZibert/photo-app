import {Loader} from "../Loader/Loader";
import styled from "styled-components";
import {FC} from "react";

export const PageLoader:FC = () => (
    <PageLoaderStyle>
        <Loader />
    </PageLoaderStyle>
);

const PageLoaderStyle = styled.div`
  min-height: calc(100vh - var(--navbar-height));
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`