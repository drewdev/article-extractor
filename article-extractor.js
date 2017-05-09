var articleText,
  articles,
  sections,
  sortByInnerHTML = function(a,b) { return (a.innerHTML.length < b.innerHTML.length) ? 1 : -1; };

articles = new Array().slice.call(document.getElementsByTagName('article'));
sections = new Array().slice.call(document.getElementsByTagName('section'));

articleText = articles.concat(sections).sort(sortByInnerHTML)[0].innerHTML;

if (articleText.indexOf('footer') > 0) {
  articleText = articleText.substring(0, articleText.indexOf('footer'));
}

document.getElementsByTagName('body')[0].innerHTML = articleText;
