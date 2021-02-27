import Link from 'next/link';
import styles from '../styles/pages/Home.module.css';

import { FaGithub } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <img src="icons/background2.svg" width="50%" className={styles.imageBackgroung}/>
      </div>
      <section>
        <img src="move-it.svg" width="100%"/>

        <span>Bem-vindo</span>
        <div className={styles.hintIcon}>
          <FaGithub size={30} color="#ddd"/>
          <p>Faça login com seu GitHub para prosseguir</p>
        </div>
        
        <div className={styles.continue}>
          <input placeholder="digite seu username"/>
          <button>
            <AiOutlineArrowRight size={25} color="#fff" />
          </button>
        </div>
      </section>
      
    </div>
  );
}