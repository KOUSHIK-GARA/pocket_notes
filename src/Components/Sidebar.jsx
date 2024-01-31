import { useEffect, useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({openModal, groups, groupSelected, selectGroup, getIcon,setGroups}) =>{

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



  const handleClick = (group) => {
    selectGroup(group);
  };
  return(
    <div className={styles.sidebarContainer}>
      <h1 className={styles.appName}>Pocket Notes</h1>
      <div className={styles.groupsList}>
        {groups.map((group,index)=>(
          <div key={index} 
          onClick={() => handleClick(group)}
          style={{backgroundColor: groupSelected === group ? '#2F2F2F2B':'' ,
          padding: groupSelected === group ? '2%':'',borderRadius: groupSelected === group ? '5%':''}}
          className={styles.groupItem}>
            <div className={styles.groupIcon} style={{backgroundColor: group.color}}>{getIcon(group.groupName)}</div>
            <h2 className={styles.groupName}>{group.groupName}</h2>
        </div>
        ))}
      </div>
      <button className={styles.addGroup} onClick={()=>{openModal(true)}}>+</button>
    </div> 
  
    
  );
}

export default Sidebar;