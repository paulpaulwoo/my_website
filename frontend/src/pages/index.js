import indexCss from './index.module.css'
import MyImage from '../images/DSC04270.JPG'
import Uni from '../images/banner20200323.jpg'
export default function Index() {
    return (
        <div className={indexCss.app}>
            <div className={indexCss.welcomeSection}>
                <img src={MyImage} alt="FullBodyShot" style={{width: "50%", height: "60%"}}></img>
                <h1 className={indexCss.welcomeText}>
                    Welcome to my page!<br></br> I'm Seungjoon(SJ) Woo, a student in Computer Science at Purdue University.
                    <br></br> I aspire to become a software engineer, one that will one day impact the world.
                </h1>
            </div>
            <div className={indexCss.aboutmeSection}>
                <h1 className={indexCss.aboutmeHeading}>About Me</h1>
                <div id="aboutme"></div>

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
                    <img src={Uni} alt="University Shot" style={{width: "50%", height: "20%"}}></img>
                    </div>
                    
                    <h2 className ={indexCss.aboutmeTitle}>
                        Experiences:
                    </h2>
                    <h3>

                    </h3>
                    <body className={indexCss.aboutmeBody}>

                    </body>
                
            </div>
        </div>
    )
}