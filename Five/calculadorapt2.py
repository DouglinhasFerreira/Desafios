def adicao(x,y):
    return x+y

def subtracao(x,y):
    return x-y

def multiplicacao(x,y):
    return x*y

def divisao(x,y):
    return x/y

def calculadora():
    print ("** Bem-vindo à Calculadora **")
    print (" Selecione a operação que deseja ")
    print ("1. Adicao")
    print ("2. Subtracao")
    print ("3. Multiplicacao")
    print ("4. Divisao")

calculadora()

while True:
    escolha = input("Digite sua escolha (1/2/3/4): ")
    if escolha in ('1','2','3','4'):
        x = int(input(" Digite o primeiro numero: "))
        y = int(input(" Digite o segundo numero: "))
        if escolha == '1':
            print("Resultado: ", adicao (x,y))
        if escolha == '2':
            print("Resultado: ", subtracao(x,y))
        if escolha == '3':
            print("Resultado: ", multiplicacao(x,y))
        if escolha == '4':
            if y!= 0:
                print("Resultado: ", divisao(x,y))
            else:
                print("Proibido a divisão por zero")
    else:
        print("Escolha Invalida")
    
    continuar = input("Deseja fazer outra operação? (s/n)")
    if continuar == "n":
        print("Calculadora encerrada") 
        break;




                