import React from "react";
import Customer from "./components/Customer";
import "./App.css"

const customers = [{
      id: 1,
      image: 'https://placeimg.com/84/84/1',
      name: 'shin-kim',
      age: '112112',
      gender: 'male',
      job: 'SamSung'
},
{
      id: 2,
      image: 'https://placeimg.com/64/64/2',
      name: 'sung-kim',
      age: '2212333',
      gender: 'female',
      job: 'LG'
},
{
      id: 3,
      image: 'https://placeimg.com/64/64/3',
      name: 'pang-kim',
      age: '3322332',
      gender: 'female',
      job: 'Kia'
}

]

class App extends React.Component {
      render() {
            return (
                  <div className="App">
                        {
                              customers.map(c => {
                                    return (
                                          <Customer
                                                key={c.id} id={c.id} name={c.name}
                                                job={c.job} image={c.image} age={c.age}
                                                gender={c.gender}
                                          />
                                    )
                              })
                        }
                  </div>
            )
      }
}
export default App;
