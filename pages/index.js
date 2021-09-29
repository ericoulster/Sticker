import {useRef} from 'react'
import Head from 'next/head'
import Image from 'next/image'
// import SymbolForm from '../components/SymbolForm/SymbolForm.js'
import styles from '../styles/Home.module.scss'


export default function Home() {
  const firstSymbolRef = useRef(null);
    const secondSymbolRef = useRef(null);

    const formSubmit = (e) => {
      e.preventDefault();
      alert(`${firstSymbolRef.current.value} and ${secondSymbolRef.current.value}`);
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
