import React from "react"; 
import jla from './jla.jpeg';
import ycs from './ycs.jpg';
import ydn from './ydn.jpg';
import yudi from './yudi.png';
import ymesba from './ymesba.jpg';
import dfa from './dfa.webp';
import yura from './yura.png';
import mega from './mega.png';
import argo from './argo.png';
import nsda from './nsda.png';
import orch from './orch.jpg';
import chinese from './chinese.png';
import py from './py.gif';
import resilience from './resilience.png';
import ten from './ten.jpg';
import bball from './bball.jpg';

const Experiences = () => {
    return (
        <div>
            <h1>Experiences</h1>
            <h2>Yale Men's Basketball: Student Manager</h2>
            <p>Analyzed team statistics for strategic feedback; facilitated practices, travel, and logistics</p>
            <img src={jla} className="jla" alt="jla" />
            
            <h2>Yale Computer Society: Catalyst Mentee</h2>
            <p>Learned web development and UI/UX design skills with fellow Yale students</p>
            <img src={ycs} className="ycs" alt="YCS" />

            <h2>Yale Daily News: Production and Design Heeler</h2>
            <p>Assisted in layout design and production of weekly print newspaper issues</p>
            <img src={ydn} className="ydn" alt="YDN" />
            
            <h2>Yale University Diversified Investments: Member</h2>
            <p>Conducted market research and learned about financial analysis</p>
            <img src={yudi} className="yudi" alt="yudi" />

            <h2>Yale Media, Entertainment Sports Business Association: Member</h2>
            <p>Explored career opportunities in media, entertainment, and sports industries</p>
            <img src={ymesba} className="ymesba" alt="ymesba" />

            <h2>Design for America at Yale: Member</h2>
            <p>Collaborated on human-centered design projects addressing community needs</p>
            <p>Conducted a redesign of the Yale Africa Startup Review's website</p>
            <img src={dfa} className="dfa" alt="dfa" />

            <h2>Yale Undergraduate Research Association: Y/Labs: Member</h2>
            <p>Worked on interdisciplinary teams to develop innovations for Yale's research database</p>
            <img src={yura} className="yura" alt="yura" />

            <h2>MEGA: Hackathon Winner, Debate Lead, CMO, President</h2>
            <p>Won the Business Innovator Award (best business plan aligning with the UN’s SDGs)</p>
            <p>Spearheaded event marketing, contributing to 2000+ participants and $1,000,000+ in prizes</p>
            <p>Organized and judged a global virtual public forum STEM debate with 30+ debaters</p>
            <img src={mega} className="mega" alt="mega" />

            <h2>The Argo and The Argo Jr.: Staff Writer, Sports Section Editor, Tech Editor</h2>
            <p>Workshopped article ideas in close collaboration with a team of staff writers</p>
            <p>Wrote, edited, digitally formatted, and published 100+ articles for the school newspapers</p>
            <img src={argo} className="argo" alt="argo" />

            <h2>Rutgers Prep Speech and Debate Club: Member, Vice President, Coach, President</h2>
            <p>Harvard Student Agencies Debating World Cup Finalist (4/2022 - 4/2023)</p>
            <p>Led event planning efforts for and coached Rutgers Prep's first public forum debate tournament</p>
            <p>Competed in and judged numerous NSDA public forum debate tournaments</p>
            <img src={nsda} className="nsda" alt="nsda" />

            <h2>Rutgers Prep Orchestras: Orchestra Librarian, Concertmaster</h2>
            <p>Organized, selected, and prepared sheet music for a 60-person orchestra program</p>
            <img src={orch} className="orch" alt="orch" />
            
            <h2>Huaxia Chinese School at Bridgewater: Teaching Assistant</h2>
            <p>Evaluated student assignments and provided assistance to lead instructors</p>
            <p>Interfaced with parents regarding student progress and learning outcomes</p>
            <img src={chinese} className="chinese" alt="chinese" />
            
            <h2>Rutgers Prep and Youth Code Foundation: Curriculum Developer, Lead Instructor</h2>
            <p>Developed and taught introductory and advanced Python curricula to 50 students</p>
            <p>Communicated with parents regarding students’ learning outcomes</p>
            <img src={py} className="py" alt="py" />    

            <h2>Resilience, Inc.: App Developer</h2>
            <p>Designed the user interface for a social-emotional learning time manager web extension</p>
            <img src={resilience} className="resilience" alt="resilience" />

            <h2>Rutgers Prep Tennis: Player, Captain</h2>
            <p>Competed in tennis matches against other high schools in New Jersey</p>
            <img src={ten} className="ten" alt="ten" />

            <h2>Rutgers Prep Basketball: Player, Student Manager</h2>
            <p>Contended with high school teams, recorded statistics, and calculated season averages; used statistics to positively influence in-game decisions</p>
            <img src={bball} className="bball" alt="bball" />
        </div>
    );
}

export default Experiences;