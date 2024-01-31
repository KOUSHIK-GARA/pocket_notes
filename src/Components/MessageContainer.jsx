import styles from "./MessageContainer.module.css";
import lock from "../assets/lock.png";
import banner from "../assets/Banner.png";
import Notes from "./Notes";
import { useEffect, useState } from "react";

const MessageContainer = ({groupSelected,setGroups, groups, getIcon}) =>{
  const getScreen = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };
  
  const [screenSize, setScreenSize] = useState(getScreen());

  useEffect(() => {
    const Screen = () => {
      setScreenSize(getScreen());
    };
    window.addEventListener('resize', Screen);

    const fetchGroup = async () => {
      let storedGroups = localStorage.getItem('groups');
      if (storedGroups) {
        let groups = await JSON.parse(storedGroups);
        setGroups(groups);
      }
    };
    fetchGroup();
  }, []);





  return(
    <>
     {groupSelected ?(<Notes groupSelected={groupSelected} groups={groups} getIcon ={getIcon} setGroups={setGroups}>
     </Notes>) :
    (
      <div className={styles.messageContainer}>
        <div className={styles.defaultMessageText}>
          <img src={banner} alt="banner"></img>
          <h2 className={styles.defaultMessageHeading}>Pocket Notes</h2>
          <p className={styles.defaultMessageDescription}>
            Send and receive messages without keeping your phone online.
            <br /> Use Pocket Notes on up to 4 linked devices and 1
            mobile phone
          </p>
        </div>
        <footer className={styles.defaultMessageFooter}>
          <img src={lock} alt="lock"></img> &nbsp; end-to-end encrypted
        </footer>
      </div>
    )}
    </>
   
   
  );
};

export default MessageContainer;