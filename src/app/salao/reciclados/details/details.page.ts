import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public itemrecicla:string;
  public listarecicla = [
    {"foto":"1","nome":"ANDRÉ LUIZ MENEZES DO NASCIMENTO","estado":"PE","peca":"MENTE ARMORIAL","classificacao":"ARTE RECICLADA","contato":"(81) 99982 5433"},
    {"foto":"2","nome":"ANDRÉ LUIZ MENEZES DO NASCIMENTO","estado":"PE","peca":"HOMEM CALANGO AZUL","classificacao":"ARTE RECICLADA","contato":" (81) 99982 5433"},
    {"foto":"3","nome":"ANDRÉ LUIZ MENEZES DO NASCIMENTO","estado":"PE","peca":"PÁSSARO LAMPIÃO","classificacao":"ARTE RECICLADA","contato":" (81) 99982 5433"},
    {"foto":"4","nome":"ANTONIO CARLOS LAURENTINO RIBEIRO","estado":"PE","peca":"CAVALGANDO","classificacao":"ARTESANATO RECICLADO","contato":"(81) 99109 2827"},
    {"foto":"5","nome":"ALCIONE FREITAS MARQUES DE LIMA","estado":"PE","peca":"PORTA VELAS: SANTA DE ROCA ARMORIAL","classificacao":"DESIGN RECICLADO","contato":"(81) 98321 4009"},
    {"foto":"6","nome":"ALCIONE FREITAS MARQUES DE LIMA","estado":"PE","peca":"VIAGEM AO UNIVERSO LÚDICO DAS BRINCADEIRAS TRADICIONAIS","classificacao":"ARTESANATO RECICLADO","contato":"(81) 98321 4009"},
    {"foto":"7","nome":"ALCIONE FREITAS MARQUES DE LIMA","estado":"PE","peca":"INFÂNCIA EM TEMPOS DE COVID","classificacao":"ARTESANATO RECICLADO","contato":"(81) 98321 4009"},
    {"foto":"8","nome":"ANA NADIEGE SPINELLI LARANJEIRAS","estado":"PE","peca":"SANTA CEIA","classificacao":"DESIGN RECICLADO","contato":"(81) 99112 0361"},
    {"foto":"9","nome":"ANDRÉ LUIZ DE MELO FREITAS","estado":"PE","peca":"OXALÁ","classificacao":"ARTESANATO RECICLADO","contato":" (81) 99997 8069"},
    {"foto":"10","nome":"ANDRÉ LUIZ DE MELO FREITAS","estado":"PE","peca":"ANASTÁCIA","classificacao":"ARTESANATO RECICLADO","contato":" (81) 99997 8069"},
    {"foto":"11","nome":"ELIU DAMASCENO CORREA SILVA","estado":"PE","peca":"O PAVÃO","classificacao":"ARTESANATO RECICLADO","contato":" (81) 98851 5154"},
    {"foto":"12","nome":"ELIU DAMASCENO CORREA SILVA","estado":"PE","peca":"MENOS PROJÉTEIS E MAS FLORES","classificacao":"ARTE RECICLADA","contato":" (81) 98851 5154"},
    {"foto":"13","nome":"EDMILSON DE SÁ BARRETO","estado":"PE","peca":"PEIXE","classificacao":"ARTE RECICLADA","contato":"(81) 98321 4009"},
    {"foto":"14","nome":"EFIGÊNIA MARIA FREIRE DA SILVA","estado":"PE","peca":"O BOI NA NOITE ESTRELADA","classificacao":"ARTE RECICLADA","contato":"(81) 98859 5463 "},
    {"foto":"15","nome":"EFIGÊNIA MARIA FREIRE DA SILVA","estado":"PE","peca":"JOGO DA VELHA - FREVO X CABOCLINHO","classificacao":"ARTESANATO RECICLADO","contato":"(81) 98859 5463 "},
{"foto":"16","nome":"ELIZABETH SANDRA CYRNE FERREIRA","estado":"PE","peca":"SOMOS UM - 50X97X8","classificacao":"ARTE RECICLADA","contato":"(81) 99669 2552"},
{"foto":"17","nome":"EMANUEL IZAQUI CORREA SILVA","estado":"PE","peca":"BRENNAND","classificacao":"ARTESANATO RECICLADO","contato":"(81) 98851 5154"},
{"foto":"18","nome":"HILDA DOS SANTOS BRANDÃO","estado":"PE","peca":"LOUVADA SEJA A VIDA","classificacao":"ARTESANATO RECICLADO","contato":"  (81) 98539 7282"},
{"foto":"19","nome":"HILDA DOS SANTOS BRANDÃO","estado":"PE","peca":"CONSTELAR","classificacao":"ARTESANATO RECICLADO","contato":"  (81) 98539 7282"},
{"foto":"20","nome":"HILDA DOS SANTOS BRANDÃO","estado":"PE","peca":"O DOMÍNIO","classificacao":"ARTESANATO RECICLADO","contato":"  (81) 98539 7282"},
{"foto":"21","nome":"IVONE GONÇALVES MENDES","estado":"PE","peca":"ORATÓRIO DOS ANJOS","classificacao":"ARTESANATO RECICLADO","contato":" (81) 3429 1583"},
{"foto":"22","nome":"JEFFERSON PEIXOTO DE OLIVEIRA JUNIOR","estado":"PE","peca":"ANELÃO ESTRELAR","classificacao":"ARTE RECICLADA","contato":"(81) 99926 6304"},
{"foto":"23","nome":"JEFFERSON PEIXOTO DE OLIVEIRA JUNIOR","estado":"PE","peca":"BRINCO PAPAGAIO DO FUTURO","classificacao":"ARTESANATO RECICLADO","contato":"(81) 99926 6304"},
{"foto":"24","nome":"JEFFERSON PEIXOTO DE OLIVEIRA JUNIOR","estado":"PE","peca":"CONJUNTO DE COLAR E BRINCO DIA DE SOL","classificacao":"DESIGN RECICLADO","contato":"(81) 99926 6304"},
{"foto":"25","nome":"JORGE PEREIRA DE LIMA","estado":"PE","peca":"CAMINHÃO ENGARRAFADO","classificacao":"ARTE RECICLADA","contato":" (81) 98668 7970"},
{"foto":"26","nome":"JORGE PEREIRA DE LIMA","estado":"PE","peca":"CHEVROLET GIGANTE (CARICATURA)","classificacao":"ARTESANATO RECICLADO","contato":" (81) 98668 7970"},
{"foto":"27","nome":"JORGE ROBERTO DA SILVA WANDERLEY","estado":"PE","peca":"DO MANGUE AO ARMORIAL - A FUGA","classificacao":"ARTE RECICLADA","contato":"(81) 98362 5368"},
{"foto":"28","nome":"JOÃO CASSIANO GOMES ","estado":"PE","peca":"EMPODERAMENTO","classificacao":"ARTE RECICLADA","contato":"(81) 99982 5728"},
{"foto":"29","nome":"JÚLIO MARQUES DA ROCHA NETO","estado":"PE","peca":"NOSSA SRA MÃE DA CULTURA PERNAMBUCANA","classificacao":"ARTESANATO RECICLADO","contato":"(81) 98461 2495"},
{"foto":"30","nome":"JÚLIO MARQUES DA ROCHA NETO","estado":"PE","peca":"SERENATA PRA ROSINHA","classificacao":"ARTESANATO RECICLADO","contato":"(81) 98461 2495"},
{"foto":"31","nome":"LUIZ CARLOS MELO DOS SANTOS","estado":"PE","peca":"GUERREIRO DO INVISIVEL","classificacao":"DESIGN RECICLADO","contato":"(81) 99798 4890"},
{"foto":"32","nome":"LUIZ CARLOS MELO DOS SANTOS","estado":"PE","peca":"CANGAÇO O REI E A RAINHA","classificacao":"ARTE RECICLADA","contato":"(81) 99798 4890"},
{"foto":"33","nome":"MARCOS ALBERTO CORREA SILVA","estado":"PE","peca":"O MANGUE CLAMA","classificacao":"ARTE RECICLADA","contato":"(81) 98763 5415"},
{"foto":"34","nome":"MARIA DO SOCORRO DA SILVA","estado":"PE","peca":"PORCO - ESPINHO","classificacao":"ARTESANATO RECICLADO","contato":" (81) 99375 9818"},
{"foto":"35","nome":"MILTON PEREIRA DE ARAUJO","estado":"PE","peca":"PASTORIL ESTRELA DE BELÉM","classificacao":"ARTESANATO RECICLADO","contato":"(81) 98738 3222"},
{"foto":"36","nome":"PAULO ROBERTO CARNEIRO COSTA","estado":"PE","peca":"RETIRANTES","classificacao":"ARTE RECICLADA","contato":" (81) 99548 4593"},
{"foto":"37","nome":"PAULO ROBERTO CARNEIRO COSTA","estado":"PE","peca":"GALO DA MADRUGADA","classificacao":"ARTE RECICLADA","contato":" (81) 99548 4593"},
{"foto":"38","nome":"PAULO ROBERTO CARNEIRO COSTA","estado":"PE","peca":"CABOCLO DE LANÇA","classificacao":"ARTE RECICLADA","contato":" (81) 99548 4593"},
{"foto":"39","nome":"ROSIANE SILVA SANTOS ","estado":"AL","peca":"CONSCIÊNCIA ","classificacao":"ARTE RECICLADA","contato":"(82) 99838 6272"},
{"foto":"40","nome":"ROSIANE SILVA SANTOS ","estado":"AL","peca":"FRAGMENTOS","classificacao":"ARTE RECICLADA","contato":"(82) 99838 6272"},
{"foto":"41","nome":"ROSIANE SILVA SANTOS ","estado":"AL","peca":"EU CÉLULA NO MUNDO","classificacao":"ARTE RECICLADA","contato":"(82) 99838 6272"},
{"foto":"42","nome":"SIMONE ALVES SIMONEK","estado":"PE","peca":"BALEIOTA BLUE","classificacao":"ARTE RECICLADA","contato":"(81) 99929 5634"},
{"foto":"43","nome":"SIMONE ALVES SIMONEK","estado":"PE","peca":"LUMINÁRIA CHEESE","classificacao":"DESIGN RECICLADO","contato":"(81) 99929 5634"},
{"foto":"44","nome":"SÓCRATES JOSE OSEAS DA SILVA MESQUITA","estado":"PE","peca":"CIRANDA DE CABOCLO","classificacao":"ARTE RECICLADA","contato":" (81) 9292 4913"},
{"foto":"45","nome":"VICENTE DA SILVA","estado":"PE","peca":"DOM QUIXOTE BRASILEIRO ARMORIAL","classificacao":"ARTE RECICLADA","contato":"(81) 98725 2920"},
{"foto":"46","nome":"WALDIR DE SANTANA FALCÃO","estado":"PE","peca":"BEIJA - FLOR","classificacao":"ARTE RECICLADA","contato":"(81) 98886 6622"},
{"foto":"47","nome":"WALTER BATISTA DA MATA JUNIOR","estado":"PE","peca":"ZABÉ DA LOCA, GUARDIÃ DOS ECOS DAS SERRAS","classificacao":"ARTE RECICLADA","contato":" (81) 99500 2034"},
{"foto":"48","nome":"WALTER BATISTA DA MATA JUNIOR","estado":"PE","peca":"LIA, A GUARDIÃ DAS ONDAS","classificacao":"ARTE RECICLADA","contato":" (81) 99500 2034"},
{"foto":"49","nome":"WALTER BATISTA DA MATA JUNIOR","estado":"PE","peca":"MADAME SATÃ, GUARDIÃ DOS PALCOS DOS GUETOS","classificacao":"ARTE RECICLADA","contato":" (81) 99500 2034"},
{"foto":"50","nome":"WLADIMIR GOMES DE LIMA","estado":"PE","peca":"LEMBRANÇAS DE ALEGRIAS DO CARNAVAL","classificacao":"ARTE RECICLADA","contato":" (81) 98813 6941"},
{"foto":"51","nome":"WLADIMIR GOMES DE LIMA","estado":"PE","peca":"ANJO MACHÊ","classificacao":"ARTE RECICLADA","contato":" (81) 98813 6941"},
{"foto":"52","nome":"WLADIMIR GOMES DE LIMA","estado":"PE","peca":"SANTINHA MACHÊ","classificacao":"ARTE RECICLADA","contato":" (81) 98813 6941"},
{"foto":"53","nome":"CINTIA VIANA RODRIGUES","estado":"PE","peca":"AGLOMERÔ","classificacao":"ARTE RECICLADA","contato":"81) 98912 7530"},
{"foto":"54","nome":"MAURO ROBERTO FIRMINO DOS SANTOS","estado":"PE","peca":"FUGINDO DA COVID-19 PARA OUTRO PLANETA","classificacao":"ARTE RECICLADA","contato":" (87) 99919 0748"},
{"foto":"55","nome":"MAURO ROBERTO FIRMINO DOS SANTOS","estado":"PE","peca":"MACUCA DO JOSÉ","classificacao":"ARTE RECICLADA","contato":" (87) 99919 0748"},
{"foto":"56","nome":"MAURO ROBERTO FIRMINO DOS SANTOS","estado":"PE","peca":"ANIMAIS A BORDO","classificacao":"ARTESANATO RECICLADO","contato":" (87) 99919 0748"},
{"foto":"57","nome":"VANESSA GOMES DOS SANTOS","estado":"PE","peca":"A CURA","classificacao":"ARTE RECICLADA","contato":" (81) 99208 0616"}
];
  public foto: string;
  public peca: string;
  public autor: string;
  public classificacao: string;
  public contato: string;
  public estado: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

     this.itemrecicla = this.activatedRoute.snapshot.paramMap.get('itemrecicla');
     for (let x of this.listarecicla) {

      if(x.foto==this.itemrecicla){
        this.foto = x.foto;
        this.autor = x.nome;
        this.peca = x.peca;
        this.contato = x.contato;
        this.estado = x.estado;
        this.classificacao = x.classificacao;
      }
    }
  }

}
