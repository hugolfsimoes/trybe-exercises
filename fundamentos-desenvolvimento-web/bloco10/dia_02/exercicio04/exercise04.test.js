const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
}

describe('Verify an repository ', () => {
  describe('Verify if exist respository', () => {
    it('Verify if the repository sd-01-week4-5-project-todo-list exist and sd-01-week4-5-project-meme-generator', () => {
      return getRepos('https://api.github.com/orgs/tryber/repos').then(data => {
        expect(data).toContain('sd-01-week4-5-project-todo-list');
        expect(data).toContain('sd-01-week4-5-project-meme-generator');
      });
    });
  });
});