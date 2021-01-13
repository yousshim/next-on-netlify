import styles from '../styles/Home.module.css'
import { useState } from "react";

export default function Home({ name: nameProp }) {
  const [name, setName] = useState(nameProp)
  return (
    <h1 className={styles.container}>
      hello { name}
      <button onClick={e => setName("world")}>name to world</button>
    </h1>
  )
}


export async function getServerSideProps() {
  const res = await fetch("http://next-on-netlify.vercel.app/api/hello")
  const { name } = await res.json();
  return {
    props: {
      name
    }
  }
}