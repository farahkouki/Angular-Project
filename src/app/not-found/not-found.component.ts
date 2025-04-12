import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="not-found">
      <div class="emoji">⚠️😢</div>
      <h1>404</h1>
      <p>Oups! La page que vous recherchez est introuvable.</p>
      <a routerLink="/" class="btn">Retour à l'accueil</a>
    </div>
  `,
  styles: [`
    /* Container styling */
    .not-found {
      text-align: center;
      margin-top: 50px;
      
      font-family: 'Roboto', sans-serif;
      color: #2c3e50;
      animation: fadeIn 1.5s ease-in-out;
    }

    /* Animation for smooth entrance */
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Emoji styling */
    .emoji {
      font-size: 6rem;
      margin-bottom: 20px;
      color: #e74c3c;
      animation: bounce 1.5s infinite;
    }

    /* Bounce effect for the emoji */
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
    }

    /* 404 Number styling */
    h1 {
      font-size: 5rem;
      margin: 0;
      color: #34495e;
      letter-spacing: 5px;
    }

    /* Paragraph styling */
    p {
      font-size: 1.5rem;
      margin: 10px 0 30px;
      color: #7f8c8d;
    }

    /* Button styling */
    .btn {
      text-decoration: none;
      font-size: 1.2rem;
      padding: 12px 30px;
      background: linear-gradient(135deg, #3498db, #9b59b6);
      color: white;
      border-radius: 25px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease-in-out;
    }

    .btn:hover {
      background: linear-gradient(135deg, #9b59b6, #3498db);
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }
  `]
})

export class NotFoundComponent {}
