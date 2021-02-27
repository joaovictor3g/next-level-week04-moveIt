import Router from 'next/router';
import { GetServerSideProps } from 'next';
import styles from '../styles/pages/Home.module.css';
import axios from 'axios';

import { FaGithub } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useEffect, useState } from 'react';

export default function Home() {
  const [userName, setUserName] = useState('');
  
  useEffect(() => {
    sessionStorage.setItem('name', 'name');
    sessionStorage.setItem('avatar_url', 'avatar_url');
  }, []);

  async function handleNavigateToLogged() {
    const { name, avatar_url } = (await axios.get(`https://api.github.com/users/${userName}`)).data;

    if(name && avatar_url) {
      Router.push('/logged');
      sessionStorage.setItem('name', name);
      sessionStorage.setItem('avatar_url', avatar_url);

    }
  }

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
          <input 
            placeholder="digite seu username"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <button
            type="button"
            onClick={handleNavigateToLogged}
          >
            <AiOutlineArrowRight size={25} color="#fff" />
          </button>
        </div>
      </section>
      
    </div>
  );
}
