import React, {  Component } from 'react';

class  App extends Component  {
   constructor(props) {
      super(props);
      this.state = {
        //defining the state of the app(in this case are 2)
         items: [],
        //Allows to know when the sitems have been loaded from the API
         isLoaded: false,
    }
  }

    componentDidMount() {
      //API call
      fetch('https://jsonplaceholder.typicode.com/users')
          //getting the result from the API and converting to the JSON format
          .then(res => res.json())
          .then(json => {
              this.setState({
                  isLoaded:true,
                  items: json,
              })
            });
   }
  
 //Render method is responsible for producing the output of the application  
   render ()  {

    var  { isLoaded, items } = this.state;
    if (!isLoaded) {
        return <div>Loading...</div>;
     }
    
    else  {

      return (
       <div className="App">
         
         <ul>
            {items.map(item => (
             <li key={item.id}>
               Name:  {item.name} | Email: {item.email} | Phone: {item.phone}
           </li>
          ))};
        </ul>    
      
      </div>
   );
  }
 }
}
export default App;
