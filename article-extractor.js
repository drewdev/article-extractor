var matchedElements,
  targetedContent,
  scrubbedContent,
  extractedArticle,
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

matchedElements = ['article','section'].reduce(function(accumulator, tag) {
  return accumulator.concat(Array.from(document.getElementsByTagName(tag)));
}, []);

targetedContent = matchedElements.sort(sortByInnerHTML)[0];

scrubbedContent = ['iframe','footer'].reduce(function(accumulator, tagToScrub) {
  return accumulator = scrub(tagToScrub, accumulator);
}, targetedContent.innerHTML);


extractedArticle = '<' + targetedContent.tagName + '>' +
  scrubbedContent +
  '</' + targetedContent.tagName + '>';

document.getElementsByTagName('body')[0].innerHTML = extractedArticle;
