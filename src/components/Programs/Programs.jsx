import React from 'react'
import './Programs.css'

import RightArrow from '../../assets/rightArrow.png'

import { programsData } from '../../data/programsData.js'

const Programs = () => {
  return (
    <div className="Programs">
        <div className="Programs_header">
            <span className='stroke-text'>explore our</span>
            <span>programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
        <div className="program_categories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs