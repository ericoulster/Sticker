import pandas as pd
from pathlib import Path

calendar = pd.read_csv('datetime_index.csv').drop(columns='Index')

calendar = calendar.rename(columns={'Dates':'Date'})

# going from the 70's onward
calendar = calendar[25567:]

p = Path('D:\Documents\Datasets\Stock Data\Stocks').glob('*.txt')

file_names = []
for i in p:
    file_names.append(i)

calendar = calendar.set_index('Date')

x = -1
for i in file_names:
    x += 1
    title = str(file_names[x]).split('\\')[5]
    try:
        df = pd.read_csv(i)
        df = df[['Date', 'High']]
        df = df.rename(columns={'High':title})
        df = df.set_index('Date')
        calendar = calendar.join(df, how='left')
        print(x)
    except:
        print(title)

calendar.to_csv('stocklist.csv')