// updating objects using state

export default function App() {

  const [step, setStep] = useState(1); 
  const [test,setTest] = useState({name:"jonas"});

  /////////////////////// Event Hndler function/////////////////////
  function handlePrevious() {
    if (step > 1) setStep(step - 1);

    setTest({name:"Fred"})
  }
}