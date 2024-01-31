import Notes from "./Notes";
import Modal from "../Components/Modal";
import styles from "./Sidebar.module.css"

const SidebarMobile = ({modalOpened,groupSelected,groups,setGroups, selectGroup, getIcon,toggleModal})=>{

  const handleClick = (group) => {
    selectGroup(group);
  };


  return(
    <div className={styles.sidebarContainerMobile}>
      {groupSelected ? (<Notes groupSelected={groupSelected} groups={groups} setGroups={setGroups}
        getIcon ={getIcon} />
      ) : 
      (
        <>
          <h1 className={styles.mobileAppName}>Pocket Notes</h1>
          <div className={styles.groupsList}>
            {groups.map((group) => (
                <div  key={group.id} style={{backgroundColor: groupSelected === group ? '#2F2F2F2B':'' , padding: groupSelected === group ? '2%':'',borderRadius: groupSelected === group ? '5%':''}} className={styles.groupItem}
                onClick={() => handleClick(group)}>
                  <div className={styles.groupIcon} style={{ background: group.color }}
                  > {getIcon(group.groupName)}</div>
                  <h2 className={styles.groupName}>{group.groupName}</h2>
                </div>
            ))}
          </div>
          <button className={styles.mobileAddGrp} onClick={() => toggleModal(true)}>
            +</button>
        </>
      )}
      {modalOpened && (<Modal closeModal={toggleModal}setGroups={setGroups}
          groups={groups}/> )}
  </div>
  )
}

export default SidebarMobile;