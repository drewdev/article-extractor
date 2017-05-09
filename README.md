# Article Extractor

A simple script that can be used to extract the content of an article out of the presentation of the page it's within.
The impetus was to seek a better way to trim out all the garbage so that a PDF-printable version of the content could be produced.
The project uses the `bookmarklet` package to generate a bookmarklet version of the code which can be added to the browser for easy extraction.

## Implementation

Currently, the script looks for any `<article>` or `<section>` elements on the page and sorts them by the length of their innerHTML.
The element with the largest length is then scraped for it's innerHTML and substringed in the case that any nested `<footer>` elements are present (comments are for trolls).
The resulting innerHTML substring is then set as the innerHTML of the `<body>` element: voila, a representation of the article content without all the crap!

## Setup

```
$ npm install
```

## Generate Bookmarklet

```
$ npm run-script generate
```
