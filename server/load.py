from decimal import Decimal
import json
import boto3
import logging
import decimal

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

def load_tickers(tickers, dynamodb=None):
    if not dynamodb:
        dynamodb = boto3.resource('dynamodb',region_name='us-east-2',aws_access_key_id=os.getenv("KEY_IAM_AWS"),aws_secret_access_key=os.getenv("SECRET_IAM_AWS"))

    table = dynamodb.Table('Tickers')

    #for ticker in tickers:

    table.put_item(Item=tickers[0])


if __name__ == '__main__':

    # Single import
    #with open("data/a.json") as json_file:
    #    tickers_list = json.load(json_file, parse_float=Decimal)
    #load_tickers(tickers_list)

    # Multiple import 
    rootdir = './data/'

    data = {}

    for subdir, dirss, files in os.walk(rootdir):
        for dir in dirss:

            print(dir)
            primary = []

            for subdir, dirs, files in os.walk(rootdir + dir):
                #print(subdir)
                #print(files)
                count = 0

                secondary = []
                for file in files:
                    #print(os.path.splitext(file)[0])
                    filename = os.path.splitext(file)[0]
                    #print(filename)
                    
                    count += 1
                    print(count)
                    with open(subdir + "/" + file) as json_file:
                        json_read = json.loads(json_file.read(), parse_float=decimal.Decimal)
                        #print(json_read)
                        secondary.append({filename:json_read})

                    primary.append({"ticker":dir, "data":secondary})
                #print(primary)
                
                #tickers_list = json.dumps(data)
                load_tickers(primary)
                    


# https://www.mikulskibartosz.name/batch-write-dynamodb-boto3/
# https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.Python.02.html
# https://boto3.amazonaws.com/v1/documentation/api/latest/guide/dynamodb.html?highlight=dynamodb
# https://stackoverflow.com/questions/45981950/how-to-specify-credentials-when-connecting-to-boto3-s3