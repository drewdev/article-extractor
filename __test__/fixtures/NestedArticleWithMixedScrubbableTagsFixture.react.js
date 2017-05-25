import React from 'react';

export default class Foo extends React.Component {
  render() {
    return (
      <div>
        <script></script>
        <article>
          <div>
            <header>THIS IS THE HEADER OF THE ARTICLE</header>
          </div>
          <div>
            <section>
              <p>Here is some article text that we want to match</p>
            </section>
          </div>
          <div>
            <div>
              <iframe></iframe>
            </div>
          </div>
          <div>
            <section>
              <p>Here is some more article text that we want to match</p>
            </section>
          </div>
          <div>
            <footer>
              <p>This is also likely garbage!</p>
            </footer>
          </div>
        </article>
      </div>
    )
  }
}
