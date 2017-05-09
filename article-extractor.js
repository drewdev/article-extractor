var articleText,
  articles,
  sections,
  sortByInnerHTML = function(a,b) { return (a.innerHTML.length < b.innerHTML.length) ? 1 : -1; };

articles = document.getElementsByTagName('article');
sections = document.getElementsByTagName('section');

for (var i = 0; i <= articles.length - 1; i++) {
  content.push(articles[i]);
}

for (var i = 0; i <= sections.length - 1; i++) {
  content.push(sections[i]);
}

articleText = content.sort(sortByInnerHTML)[0].innerHTML;

if (articleText.indexOf('footer') > 0) {
  articleText = articleText.substring(0, articleText.indexOf('footer'));
}

document.getElementsByTagName('body')[0].innerHTML = articleText;
