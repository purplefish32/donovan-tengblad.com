import styled from 'styled-components';

const Panel = styled.div`
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 5px;
  position: relative;
  margin-bottom: 24px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.25);
  background: url(/img/blur-bg-blurred.jpg) fixed;
  background-attachment: fixed;

  .panel-footer {
    color: #ffffff;
  }

  .panel-footer {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.12);
    height: 44px;
    font-size: 16px;
    padding: 14px 22px;
  }
  
  .footer-panel {
    height: 142px;
  }
`;

export default Panel;
