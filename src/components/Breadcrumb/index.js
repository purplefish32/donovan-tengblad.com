import styled from 'styled-components';

const Breadcrumb = styled.ul`
  background: 0 0;
  color: #fff;
  padding: 11px 0 0;
  margin: 0;
  float: right;
  list-style: none;
  border-radius: 4px;

  li {
    display: inline-block;
  }

  li+li::before {
    padding: 0 5px;
￼    color: #ccc;
￼    content: "/\00a0";
  }
`;

export default Breadcrumb;
