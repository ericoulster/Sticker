
import pandas as pd

date_index = pd.date_range('1900-01-01', '2022-01-01')

s = pd.Series(date_index)

print(s)

s.to_csv('datetime_index.csv')
