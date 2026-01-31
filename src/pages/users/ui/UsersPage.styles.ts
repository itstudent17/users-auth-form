import styled from "styled-components";

export const Page = styled.div`
  padding: 24px;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
`;

export const Content = styled.div`
  max-width: 980px;
`;

export const LoadingPlaceholder = styled.div`
  min-height: 240px;
`;

export const Footer = styled.div`
  margin-top: 24px;
`;

export const Clickable = styled.button`
  all: unset;
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  &:focus-visible {
    outline: 2px solid #1677ff;
    outline-offset: 2px;
    border-radius: 6px;
  }
`;

