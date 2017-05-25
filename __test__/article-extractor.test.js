import React from 'react';
import ReactDOM from 'react-dom';
import {extract} from '../src/extract';
import NestedArticleWithMixedScrubbableTagsFixture from './fixtures/NestedArticleWithMixedScrubbableTagsFixture.react'

beforeEach(() => {
  document.body.innerHTML = '';
  let div = document.createElement('div')
  div.setAttribute('id', 'container');
  document.body.appendChild(div);
})

test('extracts nested article with embedded mixed tags to scrub', () => {
  ReactDOM.render(<NestedArticleWithMixedScrubbableTagsFixture />, document.getElementById('container'));
  expect(extract(document).body.innerHTML).toMatchSnapshot();
});
