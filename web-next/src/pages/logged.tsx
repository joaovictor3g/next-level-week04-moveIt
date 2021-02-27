import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from 'next/head';

import styles from '../styles/pages/Logged.module.css';
import { ChallengeBox } from "../components/ChallengeBox";
import { AsideBar } from "../components/AsideBar";
import React, { useContext } from "react";
import { ToggleButton } from "../components/ToggleButton";
import { CountDownProvider } from "../contexts/CountDownContext";
import { ThemeContext } from "../contexts/ThemeContext";


export default function Logged() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
          <AsideBar />
          <ToggleButton />
          <div className={theme==='dark' ? `${styles.dark}` : styles.container}>
            <div>
              <Head>
                <title>Início | MoveIt</title>
              </Head>
              <ExperienceBar />

              <CountDownProvider>
                <section>
                  <div >
                    <Profile />
                    <CompletedChallenges />
                    <CountDown />
                  </div>

                  <div className={styles.challengeContainerSection}>
                    <ChallengeBox />
                  </div>
                </section>
              </CountDownProvider>
            </div>
          </div> 
    
    </> 
  )
}
