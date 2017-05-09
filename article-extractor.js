var articleText,
  content,
  sortByInnerHTML = function(a,b) { return (a.innerHTML.length < b.innerHTML.length) ? 1 : -1; };

content = ['article','section'].reduce(function(accumulator, tag) {
  return accumulator.concat(Array.from(document.getElementsByTagName(tag)));
}, []);

articleText = content.sort(sortByInnerHTML)[0].innerHTML;

if (articleText.indexOf('footer') > 0) {
  articleText = articleText.substring(0, articleText.indexOf('footer'));
}

document.getElementsByTagName('body')[0].innerHTML = articleText;
