def fatorial(numero):
    fatorial = 1
    for i in range(1, numero + 1):
        fatorial *= i
    return fatorial


numero = int(input("Digite um número para calcular o fatorial: "))

if numero < 0:
    print("Fatorial não é definido para números negativos.")
else:
    resultado = fatorial(numero)
    print(f"O fatorial de {numero} é {resultado}")