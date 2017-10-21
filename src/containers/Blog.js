/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { getRouteProps, Link } from 'react-static'
import H1 from 'components/H1';
import Breadcrumb from 'components/Breadcrumb';
import Content from 'components/Content';
import ContentHeader from 'components/ContentHeader';
import Panel from 'components/Panel';
import PanelHeader from 'components/PanelHeader';
import PanelBody from 'components/PanelBody';
//

export default getRouteProps(({ posts }) => (
  <Content>
    <ContentHeader className="clearfix">
      <H1 primary>Blog</H1>
      <Breadcrumb>
        <li><Link to="/">Home</Link></li>
        <li>Blog</li>
      </Breadcrumb>
    </ContentHeader>
    <div>
      <h1>It's blog time.</h1>
      <br />
      All Posts:
      {posts.map(post => (
        <Panel key={post.id}>
          <PanelHeader>
            {post.title}
          </PanelHeader>
          <PanelBody>
            {post.body}
          </PanelBody>
          <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
        </Panel>
      ))}
    </div>
  </Content>
))
