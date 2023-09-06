import "./App.css";
import { useEffect, useState } from "react";
import { dataRef } from "./firebase";
import Form1 from "./components/Form1";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import FinishPage from "./components/FinishPage";

function App() {
  const [selectedTab, setSelectedTab] = useState(1);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [institute, setInsti] = useState("");
  const [level, setLevel] = useState("");
  const [course, setCourse] = useState("");

  const [exp, setExp] = useState('');
  const [canada, setCanada] = useState('');
  const [prog, setProg] = useState('');
  const [country, setCountry] = useState('');
  const [goal, setGoal] = useState('');
  const [tut, setTut] = useState('');
  const [howmuch, setHowMuch] = useState('');

  const [list, setList] = useState('');
  const [speak, setSpeak] = useState('');
  const [read, setRead] = useState('');
  const [write, setWrite] = useState('');
  const [gic, setGic] = useState('');
  const [howmuchGic, setHowMuchGic] = useState('');

  const handleAdd = () => {
      dataRef.ref("users").child(name).set({
        email: email,
        name: name,
        age: age,
        institute:institute,
        highestLevelOfEducation:level,
        course: course,

        experience : exp,
        canadaInstitute : canada,
        programStudiedInCanada : prog,
        applyingCountry : country,
        futureGoals : goal,
        didPayTuition : tut,
        amountPaid: howmuch,

        englishListeningScore : list,
        englishSpeakingScore : speak,
        englishReadingScore : read,
        englishWritingScore : write,
        didGIC : gic,
        amountPaidGIC : howmuchGic
      });
  };

useEffect(()=>{
  var user = dataRef.ref("users")
    user.on('value', function(snapshot){
      const getData = Object.values( snapshot.val())
      // console.log(getData)
    })
},[])
  return (
    <div className="App w-100">
      <Navbar/>
      { selectedTab!==0 ?<Tabs selectedTab={selectedTab} />:""
       }
      
      {selectedTab === 1 ? (
        <Form1
          setForm2={() => setSelectedTab(2)}
          email={email}
          emailAction={(e) => {
            setEmail(e.target.value);
          }}
          name={name}
          nameAction={(e) => {
            setName(e.target.value);
          }}
          age={age}
          ageAction={(e) => {
            setAge(e.target.value);
          }}
          institute={institute}
          instituteAction={(e) => {
            setInsti(e.target.value);
          }}
          level={level}
          levelAction={(e) => {
            setLevel(e.target.value);
          }}
          course={course}
          courseAction={(e) => {
            setCourse(e.target.value);
          }}
        />
      ) : selectedTab === 2 ? (
        <Form2 setForm3={() => setSelectedTab(3)}
          exp={exp}
          expAction={(e) => {
            setExp(e.target.value);
          }}
          canada={canada}
          canadaAction={(e) => {
            setCanada(e.target.value);
          }}
          prog={prog}
          progAction={(e) => {
            setProg(e.target.value);
          }}
          country={country}
          countryAction={(e) => {
            setCountry(e.target.value);
          }}
          goal={goal}
          goalAction={(e) => {
            setGoal(e.target.value);
          }}
          tut={tut}
          tutAction={(e) => {
            setTut(e.target.value);
          }}
          howmuch={howmuch}
          howmuchAction={(e) => {
            setHowMuch(e.target.value);
          }}
        />
      ) : selectedTab === 3 ? (
        <Form3 setForm0={() => {
          setSelectedTab(0);
          handleAdd();

        }}
          list={list}
          listAction={(e) => {
            setList(e.target.value);
          }}
          speak={speak}
          speakAction={(e) => {
            setSpeak(e.target.value);
          }}
          read={read}
          readAction={(e) => {
            setRead(e.target.value);
          }}
          write={write}
          writeAction={(e) => {
            setWrite(e.target.value);
          }}
          gic={gic}
          gicAction={(e) => {
            setGic(e.target.value);
          }}
          howmuchGic={howmuchGic}
          howmuchGicAction={(e) => {
            setHowMuchGic(e.target.value);
          }}
        />
      ) : (
        <FinishPage
        email={email}
        name={name}
        age={age}
        institute={institute}
        level={level}
        course={course}

        exp={exp}
        canada={canada}
        prog={prog}
        country={country}
        goal={goal}
        tut={tut}
        howmuch={howmuch}

        list={list}
        speak={speak}
        read={read}
        write={write}
        gic={gic}
        howmuchGic={howmuchGic}

        />
      )}
    </div>
  );
}

export default App;
