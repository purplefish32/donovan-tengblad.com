import React from 'react'
import Panel from 'components/Panel';
import { Link } from 'react-static'
import Button from 'components/Button';
import ButtonWrapper from 'components/ButtonWrapper';
import PanelBody from 'components/PanelBody';
import PanelHeader from 'components/PanelHeader';
import Content from 'components/Content';
import ContentHeader from 'components/ContentHeader';
import H1 from 'components/H1';
import Breadcrumb from 'components/Breadcrumb';

export default () => (
  <Content>
    <ContentHeader>
      <H1 primary>Buttons</H1>
      <Breadcrumb>
        <li><Link to="/">Home</Link></li>
        <li>Buttons</li>
      </Breadcrumb>
    </ContentHeader>
    <div className="row">
      <div className="col-md-4">
        <Panel>
        <PanelHeader>
          Flat Buttons
        </PanelHeader>
          <PanelBody>
            <ButtonWrapper>
              <Button default>Deault</Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button primary>Primary</Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button success>Success</Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button info>Info</Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button warning>Warning</Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button danger>Danger</Button>
            </ButtonWrapper>
          </PanelBody>
        </Panel>
      </div>
      <div className="col-md-4">
        <Panel>
        <PanelHeader>
          Raised Buttons
        </PanelHeader>
          <PanelBody>
            <ButtonWrapper>
              <Button default raised>Deault</Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button primary raised>Primary</Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button success raised>Success</Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button info raised>Info</Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button warning raised>Warning</Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button danger raised>Danger</Button>
            </ButtonWrapper>
          </PanelBody>
        </Panel>
      </div>
      <div className="col-md-4">
        <Panel>
        <PanelHeader>
          Disabled Buttons
        </PanelHeader>
          <PanelBody>
            <ButtonWrapper>
              <Button default disabled>Deault</Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button primary disabled>Primary</Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button success disabled>Success</Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button info disabled>Info</Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button warning disabled>Warning</Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button danger disabled>Danger</Button>
            </ButtonWrapper>
          </PanelBody>
        </Panel>
      </div>
      <div className="col-md-4">
        <Panel>
        <PanelHeader>
          Flat Buttons
        </PanelHeader>
          <PanelBody>
            <ButtonWrapper>
              <Button default>Deault</Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button primary>Primary</Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button success>Success</Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button info>Info</Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button warning>Warning</Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button danger>Danger</Button>
            </ButtonWrapper>
          </PanelBody>
        </Panel>
      </div>
    </div>
  </Content>
)
