import WorkersList from "./components/workersList";


function App() {
  const workers = [
    { name: "Wanda", lastname: "Maximoff", workdays: 17, wage: 500 },
    { name: "Clint", lastname: "Barton", workdays: 20, wage: 520 },
    { name: "Sam", lastname: "Wilson", workdays: 10, wage: 535 },
    { name: "Jessica", lastname: "Jones", workdays: 5, wage: 540 },
    { name: "Phil", lastname: "Coulson", workdays: 9, wage: 560 },
    { name: "Nick", lastname: "Fury", workdays: 8, wage: 580 },
    { name: "Stephen", lastname: "Strange", workdays: 13, wage: 585 },
    { name: "Peter", lastname: "Quill", workdays: 21, wage: 590 },
    { name: "Matt", lastname: "Murdock", workdays: 2, wage: 600 },
    { name: "Peggy", lastname: "Carter", workdays: 18, wage: 620 },
    { name: "Scott", lastname: "Lang", workdays: 2, wage: 630 },
    { name: "Bruce", lastname: "Banner", workdays: 5, wage: 650 },
    { name: "Natasha", lastname: "Romanoff", workdays: 7, wage: 670 },
    { name: "Peter", lastname: "Parker", workdays: 27, wage: 700 },
    { name: "Tony", lastname: "Stark", workdays: 15, wage: 800 },
    { name: "Steve", lastname: "Rogers", workdays: 20, wage: 800 },
  ];
  return (

    <div className="App">
<WorkersList workers={workers}/>
    </div>
  );
}

export default App;
