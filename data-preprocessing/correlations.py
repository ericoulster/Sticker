import numpy as np
import pandas as pd
from scipy.stats import spearmanr
import json

df = pd.read_csv('../stock-differences.csv', index_col=[0])

df = df.drop(columns=['mkt_avg', 'Date'])


# Remove file-name artifacts (i.e. a.us.txt -> a)
df.columns = [x.split('.')[0] for x in df.columns]

raw_stock_df = pd.read_csv('../cleaned-stocklist.csv', index_col='Date')

raw_stock_df.columns = [x.split('.')[0] for x in raw_stock_df.columns]

# dropping foanc & ivenc
df = df.drop(columns=['foanc', 'ivenc'])
raw_stock_df = raw_stock_df.drop(columns=['foanc', 'ivenc'])

# append cleaned stocklist to the outer array (they use the same columns, so it shouldn't be as hard.) Drop NA's and append with a date-index.

for y in df.columns:
    val_dict = {}
    for x in df.columns:
        if x != y:
            subset = df[[y, x]]
            subset = subset.dropna(how='any')
            
            if (len(subset) <= 2):
                val_dict[str(subset.iloc[:,1].name)] = {'cor_processed': 0}
            
            else:
                try:
                        cor_val = spearmanr(np.array(subset.iloc[:, 0]), np.array(subset.iloc[:,1]), nan_policy='omit')
                        val_dict[str(y) + ' & ' + str(x)] = {'cor_coef': cor_val[0], 'p-val':cor_val[1], 'cor_processed': 1}
                except:
                        val_dict[str(subset.iloc[:,1].name)] = {'cor_processed': 0}
        else:
            pass
    
    name_dict = {str(y) : {'comparisons': val_dict, 'price': raw_stock_df[[y]].dropna(how='any').to_dict()[y]}}
    with open('../data/' + str(y) + '.json', 'w', encoding='utf-8') as f:
        json.dump(name_dict, f)
    del val_dict
