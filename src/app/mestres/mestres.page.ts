import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mestres',
  templateUrl: './mestres.page.html',
  styleUrls: ['./mestres.page.scss'],
})
export class MestresPage implements OnInit {
  constructor() {
       var mestres:string[][] = [
        ["AGNALDO DA SILVA","Nado","Agnaldo da Silva é um artista de Olinda. Viveu, desde sempre, uma vida que lida com o barro como matéria prima de arte e criação. Ainda pequeno, começou fazendo brinquedos, depois cerâmicas decorativas e utilitárias. Descobriu a música nas peças de barro, criando escalas musicais nos instrumentos de sopro e percussão, inspirados em formas da natureza como pássaros, peixes e raízes. Hoje tem o projeto Som do Barro."
        ],
        ["AMARO ARNALDO DO NASCIMENTO","Lula Vassoureiro","Amaro Arnaldo do Nascimento trabalha com artesanato há quase 60 anos, no município de Bezerros, terra dos Papangus, uma brigadeira das pessoas saírem às ruas de máscaras, bastante tradicional no Carnaval. Lula faz máscaras de papel em tamanhos variados, desde miniaturas, passando pelas de tamanho natural, até as gigantes, com reconhecimento internacional do seu trabalho."
        ],
        ["CARLOS FERNANDO BARBOSA DE BARROS","Carlos B.","Carlos Fernando Barbosa encontrou a sua vocação para o artesanato deste os 15 anos. Natural de Sertânia, o artista afirma que seu ponto forte é a produção de camponeses em madeira; mas também produz peças religiosas e carros de boi. Sua principal matéria-prima é a madeira de umburana, bem característica de sua região"
        ],
        ["DAMIANA MARIA DE LIMA","Damiana.","Foi na renda francesa frivolitê que Damiana Maria de Lima encontrou a verdadeira paixão de sua vida. Desde os 13 anos de idade, a mestre produz vestidos, blusas, passadeiras, sapatos e até acessórios. Natural de Orobó, ela repassou seu conhecimento para várias artesãs de associações do município e também para suas irmãs."
        ],
        ["DAVI TEIXEIRA DA SILVA","Davi Teixeira","Nascido na cidade de Bezerros, interior de Pernambuco, Davi Teixeira é filho de agricultores e sofreu na pele com as dificuldades da vida no Agreste. Em 2005, decidiu começar a escrever, retratando todas as histórias que viu e passou. Encantou-se pela poesia e pela tradição da arte do cordel e logo decidiu que nunca mais iria parar."
        ],
      ];
   }


  ngOnInit() {
  }

}
