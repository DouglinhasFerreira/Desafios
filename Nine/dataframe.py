import pandas as pd
import numpy as np

data = {'vendas': [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]}
df = pd.DataFrame(data)

media = df['vendas'].mean()
mediana = df ['vendas'].medlan()
desvio_padrao = df['vendas'].std()
maximo = df['vendas'].max()
minimo = df['vendas'].min()

print["Media:", media]
print["Mediana:", mediana]
print["Desvio Padrão:", desvio_padrao]
print["Maximo: ", maximo]
print["Minimo: ", minimo]