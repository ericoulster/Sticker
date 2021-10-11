#Import the dependencies
import requests
import pandas as pd
from bs4 import BeautifulSoup
import json
import urllib.request
import time
import argparse

import logging
from colorama import init, Fore, Style


#Get and show a list of every letter in the alphabet
import string
string.ascii_uppercase

apikey = "F3B78AEBWOIR1C7C"

logging.basicConfig(level=20, datefmt='%I:%M:%S', format='[%(asctime)s] %(message)s')

#Create two empty lists for the company name and company ticker symbol
company_name =[]
company_ticker = []

class Stocks():
    """ takes the API key of Alpha Vantage as input """

    def __init__(self, apikey):
        self.apikey = apikey
        self.set_currency()

    
    def set_currency(self, currency="USD"):
        self.currency = currency


    def price(self, name, *args):

        if args:
            currency = args[0]
        else:
            currency = self.currency

        url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&outputsize=full&symbol=" + name+"&apikey="+self.apikey
        # https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&outputsize=full&apikey=demo

        row_dict = {}

        with urllib.request.urlopen(url) as url:
            data = json.loads(url.read().decode())
            #print(data)
            try:
                for i in data['Time Series (Daily)']:
                    print(data['Time Series (Daily)'][i]['5. adjusted close'])
            except KeyError:
                print(Fore.CYAN + Style.BRIGHT + f'\nGetting prices for {name}.\n')
                return
             
            row_dict[name] = data['Time Series (Daily)']

            with open('prices/'+name +'.json', "w", encoding="utf-8") as price_file:
                                json.dump(row_dict, price_file)    
                                price_file.close()  

        last_date = list(data["Time Series (Daily)"].keys())[0]
        price = float(data["Time Series (Daily)"][last_date]["4. close"])


        return({'price':price, 'currency':currency, 'name':name})

    def ticker_upper(self, ticker):
        self.ticker = ticker

        Letter =  ticker.upper().replace(".", "-")

        stocks = Stocks(apikey)

        # loop for each ticker
        res = stocks.price(Letter)

        if res is None:
            print(f'The API call return {res}')

            with open("ticker_crash_log.txt", 'a', encoding='utf-8') as f:
                f.write(f'{Letter} returned {res} \n')
            return
   
        print(f'{res["name"]} is at {res["currency"]}{res["price"]}')

#Create a function to scrape the data
def scrape_stock_symbols(Letter):
    Letter =  Letter.upper()
    URL =  'https://www.advfn.com/nyse/newyorkstockexchange.asp?companies='+Letter
    page = requests.get(URL)

    soup = BeautifulSoup(page.text, "html.parser")
    odd_rows = soup.find_all('tr', attrs= {'class':'ts0'})
    even_rows = soup.find_all('tr', attrs= {'class':'ts1'})

    for i in odd_rows:
        row = i.find_all('td')
        company_name.append(row[0].text.strip())
        company_ticker.append(row[1].text.strip())
    for i in even_rows:
        row = i.find_all('td')
        company_name.append(row[0].text.strip())
        company_ticker.append(row[1].text.strip())
    return (company_name, company_ticker)

def scraper_cleaner():
    #Loop through every letter in the alphabet to get all of the tickers from the website
    # Previously in __name__ generic
    
    for char in string.ascii_uppercase:
        print(char)
        (temp_name,temp_ticker) = scrape_stock_symbols(char)

        #Create a new dataFrame that contains the company name and company ticker
        data = pd.DataFrame(columns = ['company_name',  'company_ticker']) 
        data['company_name'] = temp_name
        data['company_ticker'] = temp_ticker


    #Data Cleaning
    data = data[data['company_name'] != '']
    data.to_json('data/all_NYSE.json')


    with open('data/all_NYSE.json', 'r') as f:
        data = json.load(f)

        for i, value in data['company_ticker'].items():
            print(value)
            stocks = Stocks(apikey)
            stocks.ticker_upper(value)


if __name__ == '__main__':
    ARGS = argparse.ArgumentParser(description='Bot Recommendation')
    ARGS.add_argument('--c', action='store_true', dest='command_line', default=False, help='Command line output')
    args = ARGS.parse_args()

    #scraper_cleaner()
    print(args)

    if args.command_line:
        sep = '\t'

        with open("NYSE_list.txt") as file_in:
            lines = []
            count = 0

            for line in file_in:
                res = line.split(sep, 1)[0]
                # print(res)
                
                stocks = Stocks(apikey)
                stocks.ticker_upper(res)

                count +=1
                    
                if count == 3:
                    print(Fore.CYAN + Style.BRIGHT + f'\nAPI need to wait 1 minute.\n')
                    time.sleep(60) # Delay for 1 minute (60 seconds).
                    count = 0
        
 