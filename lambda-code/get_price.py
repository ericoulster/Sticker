import boto3
import numpy as np
import json
from pathlib import Path
from scipy.stats import spearmanr

client = boto3.client('dynamodb',region_name='us-east-2')


def get_ticker(ticker):
    response = client.get_item(TableName='tickers_sp', Key={'ticker': {'S': ticker}})
    return response


def price_process(response):
    price_dict = {}
    for i in response['Item']['price']['L']:
        keys = list(i['M'].keys())[0]
        values = list(list(i['M'].values())[0].values())[0]
            
        price_dict[keys] = values
    return price_dict


def ticker_process(ticker_name: str()) -> dict():
    try:
        ticker = get_ticker(ticker_name)
    except:
        Exception(f'Failed to retrieve data for {ticker_name}')
    
    try:
        ticker_price_clean = price_process(ticker)
    except:
        Exception(f'Failed to process data for {ticker_name}')
    
    return ticker_price_clean


def full_process(ticker_names: list()):
    name_1 = ticker_names[0]
    name_2 = ticker_names[1]

    ticker_1 = ticker_process(name_1)
    ticker_2 = ticker_process(name_2)

    mutual_keys = []

    for key in ticker_1:
        if key in ticker_2:
            mutual_keys.append(key)
    
    ticker_1_list = []
    ticker_2_list = []
    for i in mutual_keys:
        t1 = ticker_1[i]
        t2 = ticker_2[i]
        ticker_1_list.append(float(t1))
        ticker_2_list.append(float(t2))    
    
    ticker_1_asc = list(reversed(ticker_1_list))
    ticker_2_asc = list(reversed(ticker_2_list))

    t1_diff = np.diff(ticker_1_asc) / np.abs(ticker_1_asc[:-1]) * 100
    t2_diff = np.diff(ticker_2_asc) / np.abs(ticker_2_asc[:-1]) * 100

    cor_val = spearmanr(t1_diff, t2_diff, nan_policy='omit')

    return cor_val