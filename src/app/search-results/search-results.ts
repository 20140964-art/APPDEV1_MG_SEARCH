import { Component } from '@angular/core';

@Component({
  selector: 'app-search-results',
  imports: [],
  templateUrl: './search-results.html',
  styleUrl: './search-results.css'
})
export class SearchResults {
      web = [
    { name: 'Angular', url: 'https://angular.io', description: 'One framework. Mobile & desktop.' },
    { name: 'Bootstrap', url: 'https://getbootstrap.com', description: 'The most popular HTML, CSS, and JS library in the world.' },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org', description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.' },
    { name: 'VS Code', url: 'https://code.visualstudio.com', description: 'Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.' },
    { name: 'Stack Overflow', url: 'https://stackoverflow.com', description: 'Stack Overflow is the largest, most trusted online community for developers to learn, share their programming knowledge, and build their careers.' },
    { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', description: 'The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps.' },
    { name: 'W3Schools', url: 'https://www.w3schools.com', description: 'W3Schools is a web developer\'s site, with tutorials and references on web development languages such as HTML, CSS, JavaScript, PHP, SQL, and Bootstrap, covering most aspects of web programming.' },
    { name: 'GitHub', url: 'https://github.com', description: 'GitHub is where over 100 million developers shape the future of software, together.' },
  ];

  searchText: string = '';

  get filteredWeb() {
    const term = this.searchText.toLowerCase();
    return this.web.filter(x => x.name.toLowerCase().includes(term));
  }
}
