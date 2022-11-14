import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import Problem from '../../Data/Data.json'

function Home() {
    const id1 = Problem.importantQuestions[0].id;
    const id2 = Problem.importantQuestions[1].id;
  return (
    <div className='container'>
        <h1>Solve Problems</h1>
        <div className='problem'>
            <div className='problem_desc '>
                <h4>{Problem.importantQuestions[0].title}</h4>
                <p>{Problem.importantQuestions[0].description}</p>
                
                <NavLink className='btn btn-success' to= {'/editor/' + id1}>solve</NavLink> 
            </div>
        </div>
        <div className='problem'>
            <div className='problem_desc '>
                <h4>{Problem.importantQuestions[1].title}</h4>
                <p>{Problem.importantQuestions[1].description}</p>
                <NavLink className='btn btn-success' to= {'/editor/' + id2}>solve</NavLink>
            </div>
        </div>
        
    </div>
  )
}

export default Home