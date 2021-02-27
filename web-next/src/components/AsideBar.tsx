import styles from '../styles/components/AsideBar.module.css';
import { AiOutlineHome } from 'react-icons/ai';
import { FaMedal  } from 'react-icons/fa';

export function AsideBar() {
    return (
        <div className={styles.asideBarContainer}>
            <img src="icons/logoAside.svg"/>
            
            <div>
                <button>
                    <AiOutlineHome size={30} color="#3173FB" />
                    <div />
                </button>

                <button>
                    <FaMedal size={30} color="#3173FB"/>
                    <div />
                </button>
                
            </div>
            
        </div>
    )
}