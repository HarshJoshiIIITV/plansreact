import React,{Component} from 'react';
import './App.css';
import Plans from './Plans';
import Addplan from './Addplan';
import Particles from 'react-particles-js';
import 'tachyons';


const particleOpt={
  particles:{
    number:{
      value:200,
      density:{
        enable:true,
        value_area:700
      }
    }
  }
}



class App extends Component {

  state={
    plans:[
      {id:1,content:'Geeks for geeks round-1'},
      {id:2,content:'Codechef summer challenge'},
      {id:3,content:'Codeforces SummerCup'},
      {id:4,content:'Cook-a-code IIITV'}
    ]
  }  

  deletePlan=(id)=>{
    const plans=this.state.plans.filter(plan=>{
      return plan.id!==id;
    });

    this.setState({
      plans:plans
    })
  }

  addPlan=(plan)=>{
    plan.id=Math.random();
    let plans=[...this.state.plans,plan];
    this.setState({
      plans:plans
    })
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' 
              params={particleOpt}    
          />
        <h1 className="f1 dark-gray mt0 mb5 bb ttu  tracked">Plan Here</h1>
        <Plans plans={this.state.plans} deletePlan={this.deletePlan} /> 
        <Addplan addPlan={this.addPlan} />
       
      </div>
    );
  }
}

export default App;
