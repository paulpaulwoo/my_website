import indexCss from './index.module.css'
import MyImage from '../images/DSC04270.JPG'
import Uni from '../images/banner20200323.jpg'
import Langs from '../images/language.avif'
import fam from '../images/family.jpg'
import dog from '../images/dog.jpg'
export default function Index() {
    return (
        <div className={indexCss.app}>
            <div className={indexCss.welcomeSection}>
                <img src={MyImage} alt="FullBodyShot" className={indexCss.fullBodyShot}></img>
                <h1 className={indexCss.welcomeText}>
                    Welcome to my page!<br></br> I'm Seungjoon(SJ) Woo, a student in Computer Science at Purdue University.
                    <br></br> I aspire to become a software engineer, one that will one day impact the world.
                </h1>
            </div>
            <div id="aboutme"></div>
            <div className={indexCss.aboutmeSection}>
                <h1 className={indexCss.aboutmeHeading}>About Me</h1>
                

                    <h2 className ={indexCss.aboutmeTitle}>
                        Education:
                    </h2>
                    <div className={indexCss.aboutmeTwoSubs}>
                    <div className={indexCss.educationSection}>
                    <div className={indexCss.aboutmeSubSection}>
                    <h3>
                        School: 
                    </h3>
                    <h3>
                        Purdue University
                    </h3>
                    </div>
                    <div className={indexCss.aboutmeSubSection}>
                    <h3>
                        Major: 
                    </h3>
                    <h3>
                        Computer Science
                    </h3>
                    </div>
                    <div className={indexCss.aboutmeSubSection}>
                    <h3>
                        Expected Graduation: 
                    </h3>
                    <h3>
                        May 2024
                    </h3>
                    
                    </div>
                    <body className={indexCss.aboutmeBody}>
                        I truly learned a lot in this university. It easily has been my best years so far, 
                        and my learning experiences <br></br> from the school do make me feel ready for the industry.
                    </body>
                    </div>
                    <img src={Uni} alt="University Shot" className={indexCss.schoolImage}></img>
                    </div>
                    
                    <h2 className ={indexCss.aboutmeTitleRight}>
                        Toolset:
                    </h2>
                    <div className={indexCss.aboutmeTwoSubs}>
                    <img src={Langs} alt="Progrmamming languages" className={indexCss.languageImage}></img>
                    <div className={indexCss.educationSection}>
                    
                    <div className={indexCss.aboutmeSubSection}>
                    <h3>
                        Programming Languages / Tools: 
                    </h3>
                    <h3>
                        Python, Java, C, C++, TCL, JavaScript, HTML, SQL, Lex, Yacc, CSS
                    </h3>
                    </div>
                    <div className={indexCss.aboutmeSubSection}>
                    <h3>
                        Experienced with: 
                    </h3>
                    <h3>
                        AMBA Protocol, HTTP, React, Flask, SQLite
                    </h3>
                    
                    </div>
                    <body className={indexCss.aboutmeBody}>
                        I learned these tools in various ways. Some of them I learned directly through courses, some I learned as I go while doing projects. These certainly won't be the end of my list, and I look forward to learning more!
                    </body>
                    </div>
                    
                    </div>
                    <h2 className ={indexCss.aboutmeTitle}>
                        Background:
                    </h2>
                    <div className={indexCss.aboutmeTwoSubs}>
                    <div className={indexCss.educationSection}>
                    
                    <div className={indexCss.aboutmeSubSection}>
                    <h3>
                        Programming Languages / Tools: 
                    </h3>
                    <h3>
                        Python, Java, C, C++, TCL, JavaScript, HTML, SQL, Lex, Yacc, CSS
                    </h3>
                    </div>
                    <div className={indexCss.aboutmeSubSection}>
                    <h3>
                        Experienced with: 
                    </h3>
                    <h3>
                        AMBA Protocol, HTTP, React, Flask, SQLite
                    </h3>
                    
                    </div>
                    <body className={indexCss.aboutmeBody}>
                        I learned these tools in various ways. Some of them I learned directly through courses, some I learned as I go while doing projects. These certainly won't be the end of my list, and I look forward to learning more!
                    </body>
                    </div>
                    <img src={dog} alt="Progrmamming languages" className={indexCss.languageImage}></img>
                    </div>
                
            </div>
        </div>
    )
}