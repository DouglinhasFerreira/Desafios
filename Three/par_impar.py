def verificar_par_impar(numero):
    if numero % 2 == 0:
        return f"{numero} é par."
    else:
        return f"{numero} é ímpar."

numero = int(input("Digite um número: "))
resultado = verificar_par_impar(numero)
print(resultado)