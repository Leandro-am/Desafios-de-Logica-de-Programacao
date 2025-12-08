package edu.terminal;

import java.util.Scanner;

public class ContaTerminal {
    public static void main(String[] args) throws Exception {
        // criação do scanner
        Scanner scanner = new Scanner(System.in);

        // declaração das variaveis
        String nomeUsuario, agencia;
        int numeroDaAgencia;
        // criei um saldo fixo para trazer mais sentido para a aplicação
        double saldo = 250;

        // recebendo as informações do usuario

        System.out.println("Por favor, digite o número de sua agencia");
        numeroDaAgencia = scanner.nextInt();

        System.out.println("Digite a sua agencia de banco");
        agencia = scanner.next();

        System.out.println("Digite o seu nome");
        nomeUsuario = scanner.next();
        scanner.close();

        System.out.println("Olá ".concat(nomeUsuario)
                .concat(", obrigado por criar uma conta em nosso banco, sua agencia é ".concat(agencia)
                        .concat(" conta " + numeroDaAgencia)
                        .concat(" e seu saldo de " + saldo + " ja está disponivel para saque.")));

    }

}
