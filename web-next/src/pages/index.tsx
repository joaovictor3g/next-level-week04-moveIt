import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from "../components/ChallengeBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | MoveIt</title>
      </Head>

      <ExperienceBar />

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
    </div>  
  )
}
