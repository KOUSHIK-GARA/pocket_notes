import { useEffect, useState } from "react";
import MessageContainer from "../Components/MessageContainer";
import Modal from "../Components/Modal";
import Sidebar from "../Components/Sidebar";
import SidebarMobile from "../Components/SidebarMobile";

const Home = ()=>{

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

  const getInitials = (phrase) => {
    const words = phrase.split(' ');
    let initials = '';
    if(words.length == 1){
      initials  = words[0].charAt(0).toUpperCase() + words[0].charAt(1).toUpperCase();
      return initials;
    }
    for (const word of words) {
      initials += word.charAt(0).toUpperCase();
    }
    return initials;
  }

  const [modalOpened,toggleModal] = useState(false);
  const [groups, setGroups] = useState([
    {
      groupName: "My Notes",
      color: "#B38BFA",
      notes: [{note:"Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",date:"9 Mar 2023",time:"10:10 AM"},
      {note:"Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",date:"9 Mar 2023",time:"10:10 AM"}],
      id: 0,
    },
   
  ]);
  const [groupSelected, selectGroup] = useState(false);

  return(
    <>
     {screenSize.width < 989 ?(
      <SidebarMobile modalOpened={modalOpened} toggleModal={toggleModal} groupSelected={groupSelected} groups={groups} setGroups={setGroups} selectGroup={selectGroup} getIcon ={getInitials}></SidebarMobile>
     ):(
      <div style={{display:'flex'}}>
        <Sidebar openModal={toggleModal} groupSelected={groupSelected} groups={groups} setGroups={setGroups} selectGroup={selectGroup} getIcon ={getInitials} ></Sidebar>
        {modalOpened && <Modal closeModal={toggleModal}  setGroups={setGroups} groups={groups}></Modal>}
        <MessageContainer groupSelected={groupSelected} setGroups={setGroups} groups={groups} getIcon ={getInitials}></MessageContainer>
      </div>
     )}
    </>
   
  );
}

export default Home;
