import styles from '../styles/components/AsideBar.module.css';
import { BiHomeAlt } from 'react-icons/bi';
import { FiAward  } from 'react-icons/fi';
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { ThemeContext } from '../contexts/ThemeContext';
interface AsideBarProps {
    name: 'home' | 'award';
}

export function AsideBar({ name }: AsideBarProps) {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className={theme==='light' ? styles.asideBarContainer : `${styles.asideBarContainer} ${styles.asideBarContainerDark}`}>
            <img src="logoAside.svg"/>
            
            <div>
                <Link href="/logged">
                    <a title="logged" style={{ position: 'relative' }}>
                        <BiHomeAlt size={30} color={name==='home' ? "#3173FB" : '#666666'}/>
                        <div className={name==='home' && styles.selected}/>
                    </a>
                </Link>
                
                <Link href="/leaderBoard">
                    <a title="leaderBoard">
                    <FiAward size={30} color={name==='award' ? "#3173FB" : '#666666'}/>
                    <div className={name==='award' && styles.selected}/>
                    </a>
                </Link>
                
            </div>
            
        </div>
    )
}