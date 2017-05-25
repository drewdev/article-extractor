import {extract} from '../src/extract';

test('extracts article', () => {
  const articleFixture =
    '<div>' +
      '<script></script>' +
      '<article>' +
        '<div><header>THIS IS THE HEADER OF THE ARTICLE</header></div>' +
        '<div><section><p>Here is some article text that we want to match</p></section></div>' +
        '<div><div><iframe></iframe></div></div>' +
        '<div><section><p>Here is some more article text that we want to match</p></section></div>' +
        '<div><footer><p>Maybe we want this one</p></footer></div>' +
      '</article>' +
    '</div>';
  document.body.innerHTML = articleFixture;

  expect(extract(document).body.innerHTML).toMatchSnapshot();
});
