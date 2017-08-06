import React from 'react';
import { render } from 'react-dom';
import styled, { injectGlobal } from 'styled-components';
import Highlight from 'react-highlight';
import { Block } from '../styled-helpers.js';

injectGlobal`
  * { box-sizing: border-box }
  body {
    height: 100%;
    margin: 0;
    padding: 1rem;
    background: linear-gradient(20deg,#8BC34A,#009688);
    font-family: 'Questrial', sans-serif;
    font-size: 1rem;
    letter-spacing: 0.5px;
    line-height: 1.4;
    color: white;
  }
  h1 {
    font-size: 2rem;
    letter-spacing: 3px;
    margin: 2rem 0 0 0;
    @media (min-width: 600px) {
      font-size: 3rem;
    }
  }
  h2 {
    font-size: 2rem;
    letter-spacing: 3px;
    margin: 5rem 0 0 0;
  }
  h3 {
    margin: 3rem 0 1rem 0;
  }
  a {
    color: #ffeb3b;
  }
  p {
    margin: 0;
  }
  ul {
    overflow: scroll;
    display: block;
  }
  li {
    white-space: nowrap;
  }
  li pre {
    margin: 0;
    display: inline-block;
  }
  code {
    margin-bottom: 2rem;
  }
`;

const Wrapper = styled.main`
  margin: 0 auto;
  max-width: 40rem;
`;

const LeadText = styled.p`
  margin: 2rem 0 2rem 0;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  line-height: 1.5;
  border-left: 5px solid #CDDC39;
  padding-left: 1rem;
`;

const TextBlock = styled.div`
  color: #2f2f2f;
  background: white;
  padding: 1rem;
  border-radius: 2px;

  p + p {
    margin-top: 1rem;
  }
`;

const Footer = styled.footer`
  margin-top: 5rem;
  text-align: center;
  a {
    margin: 0 2rem;
  }
`;

render((
  <Wrapper>
    <h1>Styled helpers</h1>
    <LeadText>A collection of useful helper components for your react. <br />
    Get it on <a href="https://github.com/bnhovde/styled-helpers">GitHub</a>.</LeadText>

    <p>Badges here!</p>

    <h2>Block</h2>
    <LeadText>Generic spacing-helper.</LeadText>
    <TextBlock>
      <p>The purpose of the Block component is to apply margin and padding to all components.</p>
      <p>In an ideal scenario, there is no margin/padding applied to any other component, instead wrap the element in Block and use this to generate the required margin/padding.</p>
      <p>All blocks will have left/right padding by default unless 'full' is used.</p>
    </TextBlock>

    <h3>Examples</h3>
    <p>Default block (with side gutters)</p>
    <Highlight className='xml'>
      {'<Block>\n  <SomeComponent />\n</Block>'}
    </Highlight>

    <p>Block with custom top margin of 2rem</p>
    <Highlight className='xml'>
      {'<Block mt={2}>\n  <SomeComponent />\n</Block>'}
    </Highlight>

    <p>Block with no side gutters</p>
    <Highlight className='xml'>
      {'<Block full>\n  <SomeComponent />\n</Block>'}
    </Highlight>

    <h3>All Props</h3>
    <ul>
      <li><code><pre>full - No gutters   (bool, default false)</pre></code></li>
      <li><code><pre>ml - Margin left    (integer, default 1)</pre></code></li>
      <li><code><pre>mr - Margin right   (integer, default 1)</pre></code></li>
      <li><code><pre>mt - Margin top     (integer, default null)</pre></code></li>
      <li><code><pre>mb - Margin bottom  (integer, default null)</pre></code></li>
      <li><code><pre>pl - Padding left   (integer, default null)</pre></code></li>
      <li><code><pre>pr - Padding right  (integer, default null)</pre></code></li>
      <li><code><pre>pt - Padding top    (integer, default null)</pre></code></li>
      <li><code><pre>pb - Padding bottom (integer, default null)</pre></code></li>
    </ul>

    <Footer>
      <a href="https://github.com/bnhovde/styled-helpers">GitHub</a>
      <a href="https://twitter.com/bardguyver">Author</a>
    </Footer>
  </Wrapper>
), document.getElementById('root'));
