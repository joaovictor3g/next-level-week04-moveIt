import { AsideBar } from "../components/AsideBar";
import React, { useContext } from 'react';
import styles from '../styles/pages/LeaderBoard.module.css';
import { ThemeContext } from "../contexts/ThemeContext";
import { ToggleButton } from "../components/ToggleButton";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface LeaderBoardProps {
    currentTheme: string;
}

export default function LeaderBoard(props: LeaderBoardProps) {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <AsideBar name="award"/>
            <ToggleButton />
            <div className={theme==='dark' ? `${styles.container} ${styles.containerDark}` : styles.container}>
                <Head>
                    <title>LeaderBoard | MoveIt</title>
                </Head>
                <div className={styles.content}>
                    <strong>LeaderBoard</strong>

                    <header>
                        <span>Posição</span>
                        <span>Usuário</span>
                        <span>Desafios</span>
                        <span>Experiência</span>
                    </header>

                    <main>
                        <div className={styles.profile}>
                            <span className={styles.level}>
                                1
                            </span>
                        
                            <div>
                                <img src={"https://avatars.githubusercontent.com/u/55103977?s=460&v=4"} alt="Joao" />
                                <div>
                                    <strong>João Victor</strong>

                                    <p>
                                        <img src="icons/level.svg" alt="Level"/>
                                        Level 1 
                                    </p>
                                </div>
                            </div>

                            <span>127 desafios completados</span>
                            
                            <span>154000 xp</span>
                        </div>

                        <div className={styles.profile}>
                            <span className={styles.level}>
                                2
                            </span>
                        
                            <div>
                                <img src={"https://avatars.githubusercontent.com/u/55103977?s=460&v=4"} alt="Joao" />
                                <div>
                                    <strong>João Victor</strong>

                                    <p>
                                        <img src="icons/level.svg" alt="Level"/>
                                        Level 1 
                                    </p>
                                </div>
                            </div>

                            <span>127 desafios completados</span>
                            
                            <span>154000 xp</span>
                        </div>
                        
                        <div className={styles.profile}>
                            <span className={styles.level}>
                                3
                            </span>
                        
                            <div>
                                <img src={"https://avatars.githubusercontent.com/u/55103977?s=460&v=4"} alt="Joao" />
                                <div>
                                    <strong>João Victor</strong>

                                    <p>
                                        <img src="icons/level.svg" alt="Level"/>
                                        Level 1 
                                    </p>
                                </div>
                            </div>

                            <span>127 desafios completados</span>
                            
                            <span>154000 xp</span>
                        </div>

                    </main>

                </div>

            </div>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {
    const { currentTheme } = ctx.req.cookies;
    console.log(currentTheme)
    return {
        props : { currentTheme }
    }
}