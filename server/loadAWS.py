from decimal import Decimal
import json
import boto3
import logging
import decimal
import time

## importing the load_dotenv from the python-dotenv module
from dotenv import load_dotenv
 
## using existing module to specify location of the .env file
from pathlib import Path
import os
 
logging.basicConfig(level=20, datefmt='%I:%M:%S', format='[%(asctime)s] %(message)s')

load_dotenv()
env_path = Path('.')/'.env'
load_dotenv(dotenv_path=env_path)

print(os.getenv("KEY_IAM_AWS"))

dynamodb = boto3.resource('dynamodb',region_name='us-east-2',aws_access_key_id=os.getenv("KEY_IAM_AWS"),aws_secret_access_key=os.getenv("SECRET_IAM_AWS"))

table = dynamodb.Table('Tickers')

def load_tickers():
    data_path = Path(r'data/').glob('*.json')

    for i in data_path:
        #print(i)
        row_dict = {}

        with open(i, 'r') as json_file:
                print(i.stem)
                
                row_dict['ticker'] = i.stem
                
                data = json.load(json_file)
                print(data)
                
                row_dict['price'] = data[i.stem]['price']
                print(row_dict)
                

if __name__ == '__main__':
    load_tickers()
                    


# https://www.mikulskibartosz.name/batch-write-dynamodb-boto3/
# https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.Python.02.html
# https://boto3.amazonaws.com/v1/documentation/api/latest/guide/dynamodb.html?highlight=dynamodb
# https://stackoverflow.com/questions/45981950/how-to-specify-credentials-when-connecting-to-boto3-s3