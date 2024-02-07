import ModalWindow from "./components/ModalWindow";
import Acordeon from "./components/Acordeon";
import './style/main.css'

const faqList = [
  { 
    id: 0,
    question: "Section 1",
    answer: "Lorem ipsum...1"
  },
  {
    id: 1,
    question: "Section 2",
    answer: "Lorem ipsum... Lorem ipsum...2"
  },
  {
    id: 2,
    question: "Section 3",
    answer: "Lorem ipsum... Lorem ipsum... Lorem ipsum...3"
  }
]

function App() {

  return (
    <>
    <header>Модальне вікно та акордеон </header>
    
    <ModalWindow />

    <hr/>
    
    <Acordeon faqList = {faqList} />

    </>
  )
}

export default App;
