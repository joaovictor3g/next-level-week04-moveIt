import styles from '../styles/components/AsideBar.module.css';
import { AiOutlineHome } from 'react-icons/ai';
import { FaMedal  } from 'react-icons/fa';

export function AsideBar() {
    return (
        <div className={styles.asideBarContainer}>
            <img src="icons/favicon.svg"/>
            
            <div>
                <div>
                    <div />
                    <button>
                        <AiOutlineHome color="blue" size={30}/>

                    </button>
                </div>

                {/* <button>
                    <FaMedal color="blue" size={30}/>
                </button> */}
            </div>
            
        </div>
    )
}