export function extract(content) {
  let matchedElements;
  let scrubbedElements;
  let targetedContent;
  let extractedArticle;

  const elementsToSelect = ['article','section'];
  const tagsToScrub = ['style','noscript','script','iframe','footer','gpt-ad'];
  const sortByInnerHTML = (a,b) => (a.innerHTML.length < b.innerHTML.length) ? 1 : -1;

  function scrub(tagName, raw) {
    if (raw.indexOf(`<${tagName}`) > 0) {
      var openingSelector = `<${tagName}`,
        closingSelector = `</${tagName}>`,
        startIndex = raw.indexOf(openingSelector),
        endIndex = raw.indexOf(closingSelector) + closingSelector.length - 1,
        transformed;
      transformed = raw.substring(0,startIndex) + raw.substring(endIndex + 1, raw.length)
      return scrub(tagName, transformed)
    } else {
      return raw;
    }
  }

  matchedElements = elementsToSelect.reduce((accumulator, tag) => {
    return accumulator.concat(Array.from(content.getElementsByTagName(tag)));
  }, []);


  if (matchedElements.length > 0) {
    scrubbedElements = matchedElements.reduce((elements, element) => {
      elements.push({
        tagName: element.tagName,
        innerHTML: tagsToScrub.reduce((accumulator, tagToScrub) => scrub(tagToScrub, accumulator), element.innerHTML)
      });
      return elements
    }, []);

    targetedContent = scrubbedElements.sort(sortByInnerHTML)[0];

    extractedArticle = `<${targetedContent.tagName}>${targetedContent.innerHTML}</${targetedContent.tagName}>`;

    content.body.innerHTML = extractedArticle;
  }

  return content
}
