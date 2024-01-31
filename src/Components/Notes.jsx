import { useEffect, useState } from "react";
import styles from "./Notes.module.css";
import send from "./../assets/send.png";
import back from '../assets/bb.png';

const Notes = ({groupSelected,setGroups, groups, getIcon})=>{
  let [note, setNote] = useState('');
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
  }, []);


  let notes = groupSelected.notes;
  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = () => {
    
    let newGroup = [...groups];

    let Cgroup = newGroup[groupSelected.id];

    let time = `${new Date().toLocaleTimeString('en-us', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })}`;

    let date = ` ${new Date().toLocaleDateString([], {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })}`;

    Cgroup['notes'].push({ date, time, note });
    localStorage.setItem('groups', JSON.stringify(newGroup));
    setNote("");
  };


  const keypress = (e) => {
    if (e.code === 'Enter') {
      handleSubmit();
      setNote('');
    }
  };

  
  return(
    <>
      {screenSize.width < 989 ?(
      <>
         <div className={styles.notesContainer}>
          <div className={styles.notesHeader}>
            <img className={styles.mobileBack} src={back} alt={back} onClick={() => {window.location.reload(); }} />
            <div className={styles.mobileNotesIcon} style={{ background: groupSelected.color }}>
            {getIcon(groupSelected.groupName)}
            </div>
            <h2 className={styles.groupName}>{groupSelected.groupName}</h2>
          </div>
          <div className={styles.mobileNotesDisplay}>
            {notes.map((note,index) => (
              <div key={index}  className={styles.mobileNote}>
                 <p className={styles.TextMobile}>{note.note}</p>
                <div className={styles.mobileDateAndTime}>
                  <p className={styles.mobileDate}>{note.date}</p>
                  <p className={styles.mobileDot}>.</p>
                  <p className={styles.mobileTime}>{note.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.mobileNotesTextArea}>
            <textarea
              className={styles.TextInputMobile}
              type="text"
              value={note}
              onChange={handleChange}
              placeholder="Enter your text here..."
              onKeyDown={keypress}
            ></textarea>
            <img
              src={send}
              className={styles.mobileSendImg}
              alt="SendImg"
              onClick={note.trim() !="" ? handleSubmit : undefined}
            />
          </div>
        </div>
      </>):(
      <div className={styles.notesContainer}>
        <div className={styles.notesHeader}>
          <div className={styles.notesIcon} style={{background:groupSelected.color}}>{getIcon(groupSelected.groupName)}</div>
          <h2 className={styles.groupName}>{groupSelected.groupName}</h2>
        </div>
        <div className = {styles.notesDisplay}>
          {notes.map((note,index) => (
            <div key={index} className={styles.note}>
                <p className={styles.content}>{note.note}</p>
                <div className={styles.DateAndTime}>
                  <p className={styles.Date}>{note.date}</p>
                  <p className={styles.dot}>.</p>
                  <p className={styles.Time}>{note.time}</p>
                </div>
                
              </div>
            ))}
        </div>
        <div className={styles.notesTextArea}>
          <textarea className={styles.TextInput} type="text" value={note} placeholder="Enter your text here..."  onChange={handleChange} onKeyDown={keypress}></textarea>
          <img src={send} className={styles.SendImg} alt="SendImg"  
          onClick={note.trim() !="" ? handleSubmit : undefined}/>
        </div>
      </div>
      )}
    </>
  );
}

export default Notes;