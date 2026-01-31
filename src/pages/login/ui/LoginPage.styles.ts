import styled from "styled-components";
import { Card, Space } from "antd";

export const Page = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
`;

export const LoginCard = styled(Card)`
  width: 420px;
  max-width: calc(100vw - 32px);
`;

export const Content = styled(Space)`
  width: 100%;
`;

export const Header = styled.div`
  .ant-typography {
    margin-bottom: 0 !important;
  }
`;

export const FormShell = styled.div`
  .ant-form-item:last-of-type {
    margin-bottom: 0;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

