import indexCss from './index.module.css'
import MyImage from '../images/DSC04270.JPG'
import MyImage2 from '../images/full_body_2.jpg'
import Uni from '../images/banner20200323.jpg'
import Langs from '../images/language.avif'
import fam from '../images/family.jpg'
import dog from '../images/dog.jpg'
import Carousel, {CarouselItem} from '../components/projectSlide';
import ball from "../images/Crystal Ball.png"
import shell from "../images/shell2.png"
import website from "../images/website.png"
import myDog from "../images/myDog.png"
import linkedIn from "../images/linkedin-3-xxl.png"
import github from "../images/github.png"
import { useState } from 'react'
import GithubList from '../components/githubList'

export default function Index() {
    const [name, pushName]=useState(null)
    const [contact, pushContact]=useState(null)
    const [problem, pushProblem]=useState(null)
    const [contactResultText, setContactResultText]=useState("Please don't spam, I want to keep my free API.")

    function setName(val) {
        pushName(val.target.value)
      }
      function setContact(val) {
        pushContact(val.target.value)
      }
      function setProblem(val) {
        pushProblem(val.target.value)
      }
    function sendBugReport() {
        let bugInfo = {
          "name": name,
          "email": contact,
          "problem": problem
        };
        fetch('/bugReport', {
          "method": "POST",
          "headers": {"Content-Type": "application/json"},
          "body": JSON.stringify(bugInfo)
        }).then(res => res.json()).then(
          setContactResultText("Report Sent!")
        )
      }

      const sendBugReportHandle = event => {
        event.currentTarget.disabled = true;
        console.log("button clicked")
        sendBugReport()
      };

    return (
        <div className={indexCss.mobileFormatter}>
        <div className = {indexCss.mobileSpacing}></div>
        <div className={indexCss.app}>
            <div className={indexCss.welcomeSection}>
                <img src={MyImage2} alt="FullBodyShot" className={indexCss.fullBodyShot}></img>
                <h1 className={indexCss.welcomeText}>
                    Welcome to my page!<br></br> I'm Seungjoon(SJ) Woo, a student in Computer Science at Purdue University.
                    <br></br> I aspire to become a software engineer, one that will one day impact the world.
                </h1>
            </div>
            <div id="aboutme"></div>
            <div className={indexCss.aboutmeSection}>
                <h1 className={indexCss.aboutmeHeading}>About Me</h1>
                
                    <div className={indexCss.aboutmeBubble}>
                    <h2 className ={indexCss.aboutmeTitle}>
                        Education:
                    </h2>
                    <div className={indexCss.aboutmeTwoSubs}>
                        <div className={indexCss.educationSection}>
                            <div className={indexCss.aboutmeSubSection}>
                                <h3 className={indexCss.aboutmeH3}>
                                    School: 
                                </h3>
                                <h3 className={indexCss.aboutmeH3}>
                                    Purdue University
                                </h3>
                                </div>
                            <div className={indexCss.aboutmeSubSection}>
                                <h3 className={indexCss.aboutmeH3}>
                                    Major: 
                                </h3>
                                <h3 className={indexCss.aboutmeH3}>
                                    Computer Science
                                </h3>
                            </div>
                            <div className={indexCss.aboutmeSubSection}>
                                <h3 className={indexCss.aboutmeH3}>
                                    Expected Graduation: 
                                </h3>
                                <h3 className={indexCss.aboutmeH3}>
                                    May 2024
                                </h3>
                            </div>
                    </div>
                    <img src={Uni} alt="University Shot" className={indexCss.schoolImage}></img>
                    </div>
                        <div className={indexCss.aboutmeBody}>
                            I truly learned a lot in this university. It easily has been my best years so far, 
                            and my learning experiences from the school do make me feel ready for the industry.
                        </div>
                    </div>

                    <div className={indexCss.aboutmeBubble}>
                    <h2 className ={indexCss.aboutmeTitle}>
                        Toolset:
                    </h2>
                    <div className={indexCss.aboutmeTwoSubsReverse}>
                    <img src={Langs} alt="Progrmamming languages" className={indexCss.languageImage}></img>
                    <div className={indexCss.educationSection}>
                    
                    <div className={indexCss.aboutmeSubSection}>
                    <h3 className={indexCss.aboutmeH3_2}>
                        Programming Languages / Tools: 
                    </h3>
                    <h3 className={indexCss.aboutmeH3_2}>
                        Python, Java, C, C++, TCL, JavaScript, HTML, SQL, Lex, Yacc, CSS
                    </h3>
                    </div>
                    <div className={indexCss.aboutmeSubSection}>
                    <h3 className={indexCss.aboutmeH3_2}>
                        Experienced with: 
                    </h3>
                    <h3 className={indexCss.aboutmeH3_2}>
                        AMBA Protocol, HTTP, React, Flask, SQLite
                    </h3>
                    
                    </div>
                    
                    </div>
                    
                    </div>
                    <div className={indexCss.aboutmeBody}>
                        I learned these tools in various ways. Some of them I learned directly through courses, some I learned as I go while doing projects. These certainly won't be the end of my list, and I look forward to learning more!
                    </div>
                    </div>

                    <div className={indexCss.aboutmeBubble}>
                    <h2 className ={indexCss.aboutmeTitle}>
                        My Journey:
                    </h2>
                    <div className={indexCss.aboutmeTwoSubs}>
                    <div className={indexCss.educationSection}>
                    
                    <div className={indexCss.aboutmeSubSection}>
                    
                    </div>
                    <div className={indexCss.aboutmeLongBody}>
                        I was born in 2001 April 28th in South Korea, and grew up there until high school, when I moved to the United States. 
                        I was in Texas for the next few years for high school, then right now I am in Indiana for college. I am now excited about my next destination, 
                        after I graduate Purdue University.
                    </div>
                    </div>
                    <img src={dog} alt="Progrmamming languages" className={indexCss.languageImage}></img>
                    </div>
                    <div className={indexCss.aboutmeLastPadding}></div>
                    </div>


            </div>
            <div id="projects"></div>
            <div>
                <h1 className={indexCss.aboutmeHeading}>Projects</h1>
            </div>
            <div style={{padding:"5%"}}></div>
            <div className={indexCss.carContainer}>
                <Carousel>
                    <CarouselItem><img src={ball} alt="Progrmamming languages" style={{width:"80%"}}></img></CarouselItem>
                    <CarouselItem><img src={shell} alt="Progrmamming languages" style={{width: "100%"}}></img></CarouselItem>
                    <CarouselItem><img src={website} alt="Progrmamming languages" style={{width: "100%"}}></img></CarouselItem>
                </Carousel>
            </div>


            <div className={indexCss.githubList}>
                <GithubList/>

            </div>    


            <div id="contacts"></div>
            {
               /* <h1 className={indexCss.aboutmeHeading}>Contact me</h1>
            <div className= {indexCss.contactSection}>
            <div classNmae = {indexCss.contactTextSection}>
            <div className={indexCss.nameSection}>
            <label className={indexCss.labels}>Name:</label>
            <input type="text" onChange={setName} 
            className={indexCss.nameInput} placeholder="Enter Your Name"/>
            </div>
 
              <div className={indexCss.emailSection}>
              <label className={indexCss.labels}>Email:</label>
              <input type="text" onChange={setContact} 
              className={indexCss.contactInput} placeholder="Enter Your Email"/>
                </div>
                <div className={indexCss.issueSection}>
              <label className={indexCss.labels}>Inquery:</label>
              <textarea 
              className={indexCss.issueText} style={{width: "65%"}} placeholder="Enter Problem" rows="4" cols="35" onChange={setProblem}/>
                </div>
                <div className={indexCss.submitSection}>
                <button className={indexCss.submitButton} onClick={() => sendBugReportHandle}> 
                    Submit
                </button>
                <h3 className= {indexCss.contactResult}> {contactResultText} </h3>
                </div>
            </div>
            </div>*/
            }
            <h1 className={indexCss.aboutmeHeading}>Contact me</h1>
            <div className= {indexCss.contactSection}>
            <div className= {indexCss.contactsHalf}>
            <div className={indexCss.contactsSubSection}>
            <h3 className={indexCss.contactH3}>Email :</h3>
            <h3 className={indexCss.contactH3}>paul153woo@gmail.com</h3>
            </div>
            <div className={indexCss.contactsSubSection}>
            <h3 className={indexCss.contactH3}>Phone # :</h3>
            <h3 className={indexCss.contactH3}>669-264-8858</h3>
            </div>
            <div className={indexCss.contactsSocialSection}>
            
            <h3 className={indexCss.contactH3} >LinkedIn<sup style={{fontSize: "1vh"}}>TM</sup> :</h3>
            <a href="https://www.linkedin.com/in/seungjoon-sj-woo-97a4a7220/" rel="noreferrer" className={indexCss.githubLink}><button className={indexCss.linkedinButton}><img className={indexCss.linkedinLogo} src={linkedIn}></img></button></a>
            </div>
            <div className={indexCss.contactsSocialSection}>
            
            <h3 className={indexCss.contactH3}>Github :</h3>
            <a href="https://github.com/paulpaulwoo" rel="noreferrer" className={indexCss.githubLink}><button className={indexCss.githubButton}><img className={indexCss.githubLogo} src={github}></img></button></a>
            </div>
            </div>
            
        </div>

        </div>
        <div className = {indexCss.mobileSpacing}></div>
        </div>
    )
}