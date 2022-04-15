import { Component } from '@angular/core';
import { Router } from '@angular/router'; // rotear as chamadas do menu...
//import { environment } from 'src/environments/environment'; // configurações externas
//import { AuthService } from './shared/services/auth.service'; // se precisarmos de autenticação mais tarde...

@Component({ //metadata
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
      <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    <h2>Here are some links to help you start: </h2>
    <ul>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  */
  styles: []  
})
export class AppComponent {
  title = 'The modsis App';
  //userInfo = 'unauthenticated';

  // Configurações iniciais...
  showMenu: boolean = true;//showMenu: boolean = false; Pois "em tese", você só mostra algumas opções de menu depois de autenticado...
  //public static environmentName = environment.environmentName;;  

  // Links do menu...
  links = [    
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/tests', icon: 'public', title: 'Simple Tests' }
  ];

  // Construtor da App...
  constructor(/*public authAWSome: AuthService,*/
    private router: Router) { // in order to navigate using code instead of UI/navigation-bar
    
    }

  // Exemplo de método...
  public login() {
    console.log("*** Logar Usuário ***");
    this.router.navigateByUrl("/login");
  }
}
//-------------------------