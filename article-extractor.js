var matchedElements,
  targetedContent,
  scrubbedContent,
  extractedArticle,
  elementsToSelect = ['article','section'],
  tagsToScrub = ['style','noscript','script','iframe','footer'],
  sortByInnerHTML = function(a,b) { return (a.innerHTML.length < b.innerHTML.length) ? 1 : -1; };

function scrub(tagName, raw) {
  if (raw.indexOf('<' + tagName) > 0) {
    var openingSelector = '<' + tagName,
      closingSelector = '</' + tagName + '>',
      startIndex = raw.indexOf(openingSelector),
      endIndex = raw.indexOf(closingSelector) + closingSelector.length - 1
    raw = raw.substring(0,startIndex) + raw.substring(endIndex, raw.length - 1)
    return scrub(tagName, raw)
  } else {
    return raw;
  }
}

matchedElements = elementsToSelect.reduce(function(accumulator, tag) {
  return accumulator.concat(Array.from(document.getElementsByTagName(tag)));
}, []);

if (matchedElements.length > 0) {
  matchedElements.forEach(function(element) {
    scrubbedContent = tagsToScrub.reduce(function(accumulator, tagToScrub) {
      return accumulator = scrub(tagToScrub, accumulator);
    }, element.innerHTML);
  });

  targetedContent = matchedElements.sort(sortByInnerHTML)[0];

  extractedArticle = '<' + targetedContent.tagName + '>' +
    scrubbedContent +
    '</' + targetedContent.tagName + '>';

  document.getElementsByTagName('body')[0].innerHTML = extractedArticle;
}
