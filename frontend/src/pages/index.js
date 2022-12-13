import indexCss from './index.module.css'
import MyImage from '../images/42263386.webp'

export default function Index() {
    return (
        <div className={indexCss.app}>
            <h1 className={indexCss.welcomeText}>
                Welcome to my page!<br></br> I'm Seungjoon(SJ) Woo.
            </h1>
        </div>
    )
}