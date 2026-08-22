import 'dart:io';

void main() {
  stdout.writeln("Digite o seu nome: ");
  var nome = stdin.readLineSync(); //variável tipada estaticamente 
  stdout.write("Olá, $nome\n");
  int idade2 = int.parse(stdin.readLineSync()!); //remove a proteção de null safety, mas pode gerar erro se o valor for nulo
  int idade = stdin.readLineSync() as int; //variável tipada estaticamente
  //stdin e stdout - por padrão, o Dart não tem suporte a entrada e saída de dados, mas podemos usar a biblioteca dart:io para isso.
}