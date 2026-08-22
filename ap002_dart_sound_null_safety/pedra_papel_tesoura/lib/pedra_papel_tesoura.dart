import 'dart:io';
import 'dart:math';

enum OPCAO { PEDRA, PAPEL, TESOURA, sair }

void jogo() {
  int opcaoUsuario = 0;
  do {
    //exibir o menu de opções
    print("\nEscolha uma opção:");
    print("1 - Pedra");
    print("2 - Papel");
    print("3 - Tesoura");
    print("4 - Sair\n");
    print("Digite a sua opção: ");

    //ler a opção do usuário, validando

    String? entrada = stdin.readLineSync();
    int? opcao = int.tryParse(entrada ?? '');

    if (opcao == null || opcao < 1 || opcao > 4) {
      print("Opção inválida!");
      continue;
    }

    opcaoUsuario = opcao;

    if (opcaoUsuario == 4) {
      print("Saindo do jogo...");
      break;
    }

    //gerar a opção do computador
    int opcaoComputador =
        Random().nextInt(3) + 1; //gera um número aleatório entre 1 e 3
    print(
      "\nVocê escolheu: ${OPCAO.values[opcaoUsuario - 1].name}",
    ); //exibe a opção escolhida pelo usuário
    print(
      "O computador escolheu: ${OPCAO.values[opcaoComputador - 1].name}",
    ); //exibe a opção escolhida pelo computador

    //verificar quem ganhou
    if (opcaoUsuario == opcaoComputador) {
      print("\nEmpate!");
    } else if ((opcaoUsuario == 1 && opcaoComputador == 3) ||
        (opcaoUsuario == 2 && opcaoComputador == 1) ||
        (opcaoUsuario == 3 && opcaoComputador == 2)) {
      print("\nVocê ganhou!");
    } else {
      print("\nO computador ganhou!");
    }
  } while (opcaoUsuario != 4);
}
