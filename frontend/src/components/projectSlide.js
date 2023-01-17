import React, {useEffect, useState} from "react"
import { format } from 'react-string-format';
import {useSwipeable} from "react-swipeable"
import './projectSlide.css'
export const CarouselItem = ({children, width}) => {
    return (
        <div className="carousel-item" style={{width: width}}>
            {children}
        </div>
    );
};

const Carousel = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false)
    const [showFirst, setShowFirst] = useState({
        fade:'fade-in',
    });
    const [showSecond, setShowSecond] = useState({
        fade:'fade-out',
    });
    const [showThird, setShowThird] = useState({
        fade:'fade-out',
    });

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex)
        updateProject(newIndex)
    }
    const updateProject = (newIndex) => {
        if (newIndex === 0) {
           
            setShowFirst({
                fade:'fade-in',
            })
            setShowSecond({
                fade:'fade-out',
            })
            setShowThird({
                fade:'fade-out',
            })
        } else if (newIndex === 1) {

            setShowFirst({
                fade:'fade-out',
            })
            setShowSecond({
                fade:'fade-in',
            })
            setShowThird({
                fade:'fade-out',
            })
        } else if (newIndex === 2) {

            setShowFirst({
                fade:'fade-out',
            })
            setShowSecond({
                fade:'fade-out',
            })
            setShowThird({
                fade:'fade-in',
            })
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused){
            updateIndex(activeIndex + 1);
            }
        }, 10000);
        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    })

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    })

    return (
        <div className="projectSection">
        <div className="carousel-container">
        <div className="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={()=>setPaused(false)}
            {...handlers}>

            <div className = "inner" style={{ transform: format('translateX(-{0}%)', activeIndex * 100)}} >
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width:"100%"});
                })}
            </div>
            <div className = "indicators">
            <button onClick={() => {
                updateIndex(activeIndex - 1);
            }}>Prev</button>
            {React.Children.map(children, (child, index) => {
                return(
                    <button
                        className={format('{0}', index === activeIndex ? "active" : "")}
                        onClick={() => {
                            updateIndex(index);
                        }}
                        >
                        {index + 1}
                    </button>
                )
            })}
            <button onClick={() => {
                updateIndex(activeIndex + 1);
            }}>Next</button>
            </div>
        </div>

        </div>
        <div className= "projectTextSection">
        <div className = {showFirst.fade}>
        <h1 className = "projectName">
            The Crystal Ball
        </h1>
        <body className = "projectDescription">
        This is a project I did with two other teammates for one of my courses.
        Originally there were 5 of us, but as two of them quit during the project, there was some turmoil.
        Luckily, we were able to finish the project, and build a mock stock trade software.
        I mainly worked on the transmission / protocol between the frontend and backend, interaction between users,
        and most of the stock exchange functionality.
        </body>
        </div>   
        <div className = {showSecond.fade}>
        <h1 className = "projectName">
            Shell Project
        </h1>
        <body className = "projectDescription">
        This is a project I did for one of my courses, Systems programming. We were instructed to
        build a shell as close as possible as the C shell. The hardest challenge I encountered was working with
        lex and yacc, as I had no prior experiences actually working with regexes. Through this project, I learned a lot
        about low level software building in a UNIX enviornment.
        </body>
        
        </div>  
        <div className = {showThird.fade}>
        <h1 className = "projectName">
            My website
        </h1>
        <body className = "projectDescription">
            Of course, my website is one of the projects I did! Based on the knowledge I gained from doing the crystal ball 
            project, I went further and created this website. The biggest challenge was definately this carousel, and learning
            CSS in general was very tedious. As it is my first time developing everything in the frontend myself, this was definately 
            a challenge. However, a fun challenge nonetheless!
        </body>
        
        </div>  
        </div>
        </div>
    )
}

export default Carousel