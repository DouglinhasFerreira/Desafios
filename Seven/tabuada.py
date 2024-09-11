def gerar_tabuada(numero):
    print(f"Tabuada do {numero}")
    for i in range(1, 11):
        resultado = numero * i
        print(f"{numero} x {i} = {resultado}")


numero = int(input("Digite um numero para gerar tabuada: "))

gerar_tabuada(numero)