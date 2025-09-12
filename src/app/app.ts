import { Component } from '@angular/core';
import { PasswordApiService } from './password-api.service';
import { FormsModule } from '@angular/forms'; // Adicione esta linha
import { HttpClientModule } from '@angular/common/http'; // Adicione esta linha
import { CommonModule } from '@angular/common'; // Adicione esta linha

@Component({
  selector: 'app-root',
  standalone: true, // Garante que o componente é standalone
  imports: [
    FormsModule, // Adicione aqui
    HttpClientModule, // Adicione aqui
    CommonModule // Adicione aqui
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'password-generator-ui';
  generatedPassword: string = '...';
  errorMessage: string | null = null;
  passwordStrength = { score: 0, color: 'gray' };

  // Propriedades do formulário
  passwordLength: number = 12;
  includeUppercase: boolean = true;
  includeLowercase: boolean = true;
  includeNumbers: boolean = true;
  includeSymbols: boolean = false;

  constructor(private passwordApiService: PasswordApiService) { }

  generate() {
    this.errorMessage = null;

    const requestBody = {
      length: this.passwordLength,
      includeUppercase: this.includeUppercase,
      includeLowercase: this.includeLowercase,
      includeNumbers: this.includeNumbers,
      includeSymbols: this.includeSymbols,
    };

    // Chama o serviço e se inscreve no Observable para obter a resposta
    this.passwordApiService.generatePassword(requestBody).subscribe({
      next: (password) => {
        this.generatedPassword = password;
      },
      error: (errorResponse) => {
        let extractedError: string | string[] | null = null;
        try {
          // Tenta parsear o erro como JSON
          const parsedError = JSON.parse(errorResponse.error);

          // Se for um array de strings, usa-o
          if (Array.isArray(parsedError)) {
            extractedError = parsedError;
          }
          // Se for uma string simples, usa a mensagem
          else if (typeof parsedError === 'string') {
            extractedError = parsedError;
          }
        } catch (e) {
          // Se o parsing falhar, usa o erro como texto simples
          extractedError = errorResponse.error;
        }

        // Atribui a mensagem extraída ou uma mensagem padrão
        if (Array.isArray(extractedError)) {
          this.errorMessage = extractedError.join(' | ');
        } else if (extractedError) {
          this.errorMessage = extractedError;
        } else {
          this.errorMessage = "Erro desconhecido. Por favor, tente novamente.";
        }
        this.generatedPassword = ''; // Limpa a senha gerada

        console.error('Falha na API:', errorResponse);
      }
    });
  }
}