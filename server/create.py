import boto3
import logging

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

def create_table(dynamodb=None):
    if not dynamodb:
        dynamodb = boto3.resource('dynamodb',region_name='us-east-2',aws_access_key_id=os.getenv("KEY_IAM_AWS"),aws_secret_access_key=os.getenv("SECRET_IAM_AWS"))

    table = dynamodb.create_table(
        TableName='Tickers',
        KeySchema=[
            {
                'AttributeName': 'ticker',
                'KeyType': 'HASH'  # Partition key
            }
        ],
        AttributeDefinitions=[
            {
                'AttributeName': 'ticker',
                'AttributeType': 'S'
            }

        ],
        ProvisionedThroughput={
            'ReadCapacityUnits': 10,
            'WriteCapacityUnits': 10
        }
    )
    return table


if __name__ == '__main__':
    table = create_table()

    # Wait until the table exists.
    table.meta.client.get_waiter('table_exists').wait(TableName='users')

    # Print out some data about the table.
    print("Table status:", table.table_status)

# https://github.com/jeremydaly/dynamodb-toolbox
# https://github.com/aws-samples/aws-dynamodb-examples

# https://dynobase.dev/dynamodb-table-schema-design-tool/