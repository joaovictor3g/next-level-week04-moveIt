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
import { GetServerSideProps } from "next";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number
};

export default function Logged(props: HomeProps) {
  const { theme } = useContext(ThemeContext);
  

  return (
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
          <AsideBar name="home"/>
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
        </ChallengesProvider>
  
  )
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

