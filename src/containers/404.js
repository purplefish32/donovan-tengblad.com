import React from 'react'
import Panel from 'components/Panel';
import { Link } from 'react-static'
import PanelHeader from 'components/PanelHeader';
import PanelBody from 'components/PanelBody';
import H1 from 'components/H1';
import Breadcrumb from 'components/Breadcrumb';
import Button from 'components/Button';
import Content from 'components/Content';
import ContentHeader from 'components/ContentHeader';
//

export default () => (
  <Content>
    <ContentHeader className="clearfix">
      <H1 primary>404</H1>
      <Breadcrumb>
        <li><Link to="/">Home</Link></li>
        <li>404</li>
      </Breadcrumb>
    </ContentHeader>
    <div className="row">
      <div className="col-md-12">
        <Panel>
          <PanelHeader>
            Page not found.
          </PanelHeader>
          <PanelBody>
            <H1>Oh no's! We couldn't find that page :(</H1>
          </PanelBody>
        </Panel>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <Panel>
          <PanelHeader>
            Page not found.
          </PanelHeader>
          <PanelBody>
            <H1>Oh no's! We couldn't find that page :(</H1>
          </PanelBody>
        </Panel>
      </div>
      <div className="col-md-6">
        <Panel>
          <PanelHeader>
            Page not found.
          </PanelHeader>
          <PanelBody>
            <H1>Oh no's! We couldn't find that page :(</H1>
          </PanelBody>
        </Panel>
      </div>
    </div>
  </Content>
)
