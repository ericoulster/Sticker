import {useRef} from 'react'
import Head from 'next/head'
import Image from 'next/image'
// import SymbolForm from '../components/SymbolForm/SymbolForm.js'

import AWS from "aws-sdk"
// import dynamoClient from '../db.js'

import styles from '../styles/Home.module.scss'

// var docClient = new AWS.DynamoDB.DocumentClient();
// AWS.config.update({
//   region: "us-east-2",
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// });

// var dynamoDB = new AWS.DynamoDB({
//   region: "us-east-2",
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
// });
const dynamoClient = new AWS.DynamoDB.DocumentClient({
  region: "us-east-2",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

export default function Home() {
  const firstSymbolRef = useRef(null);
    const secondSymbolRef = useRef(null);

    const formSubmit = (e) => {
      e.preventDefault();
      // alert(`${firstSymbolRef.current.value} and ${secondSymbolRef.current.value}`);

      let params = {
        TableName: "Tickers",
        Key: {
          'ticker': 'fcre'
        }
      }
      // AWS.config.update({
      //   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      //   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      //   region: process.env.AWS_REGION,
      // });

      dynamoClient.get(params, (err, data) => {
        if (err) console.log(err);
        else {
          alert(data);
          console.log(data)
        }
      });

    }


  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <p>This is a test</p>
      <form className={styles.symbolform} onSubmit={formSubmit}>
    		<label htmlFor="first">First Symbol</label>
    		<input type="text"  maxLength="4" name="first" ref={firstSymbolRef} id="first" />

    		<label htmlFor="second">Second Symbol</label>
    		<input type="text" maxLength="4" name="second" ref={secondSymbolRef} id="second" />

    		<input type="submit" onSubmit={formSubmit} style={{gridColumn: 'span 2'}}/>
    	</form>
    </div>
  )
}
