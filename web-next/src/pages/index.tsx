import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from "../components/ChallengeBox";
import { AsideBar } from "../components/AsideBar";
import React from "react";
import { ToggleButton } from "../components/ToggleButton";
import { CountDownProvider } from "../contexts/CountDownContext";

export default function Home() {
  return (
    <>
      {/* <AsideBar /> */}
      <div className={styles.container}>
        <Head>
          <title>Início | MoveIt</title>
        </Head>
        <ToggleButton />
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
    </> 
  )
}
