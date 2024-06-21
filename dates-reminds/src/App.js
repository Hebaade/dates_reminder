import "./App.css";
import { Container} from "react-bootstrap";
import Card from "./Components/Card";
import Buttons from "./Components/Buttons";
import DateCount from "./Components/DateCount";
import { Data } from "./Components/Data";
import { useEffect, useState } from "react";
function App() {
  const [person, setPerson] = useState(Data);
  const onDelete = () => {
    setPerson([])
  }
  const onShow = () => {
    setPerson(Data);
  }
  useEffect(() => {
    setPerson([])
  },[])
  return (
    <div className="App">
      <Container className="p-5 w-100">
        <DateCount Data={person} />
        <Card person={person} />
        <Buttons deleteData={onDelete} showData={onShow} />
      </Container>
    </div>
  );
}

export default App;
