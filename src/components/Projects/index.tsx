import { StyledProjects } from './styles';
import { strings } from './strings';
import H2 from '../H2';
import Container from '../Container';
import Project from '../Project';
import GamingHub from '../../assets/GamingHub.jpg';
import QuizMeApp from '../../assets/QuizMeApp.jpg';
import Movye from '../../assets/Movye.jpg';
import Whiteboard from '../../assets/Whiteboard.jpg';
import { useLangContext } from '../../hooks/useLangContext';

const Projects = () => {
  const [lang] = useLangContext();
  const s = strings[lang];
  const {
    gamingHub,
    quizMeApp,
    movye,
    whiteboard,
  } = s;

  return (
    <StyledProjects aria-labelledby="projects-title" id="portfolio">
      <Container>
        <div className="projects__header">
          <H2 id="projects-title" className="alternative">
            Portfolio
          </H2>
          <p>{s.description}</p>
        </div>

        <div className="projects__list">
          <Project
            title="henry-gaming"
            desc={gamingHub.description}
            imageSrc={GamingHub}
            websiteLink="https://henry-gaming.ar/"
            websiteLinkTarget="_blank"
            websiteLinkLabel={gamingHub.ariaWebsite}
            websiteLinkText={s.buttonWebsite}
            githubLink="https://github.com/Yerola/gaming-frontend"
            githubLinkTarget="_blank"
            githubLinkLabel={gamingHub.ariaRepository}
            githubLinkText={s.buttonRepository}
          />

          <Project
            title="Rick&Morty"
            desc={quizMeApp.description}
            imageSrc={QuizMeApp}
            websiteLink="https://rick-and-morty-henry-api.vercel.app/"
            websiteLinkTarget="_blank"
            websiteLinkLabel={quizMeApp.ariaWebsite}
            websiteLinkText={s.buttonApp}
            githubLink="https://github.com/Yerola/rick-and-morty-henry-api"
            githubLinkTarget="_blank"
            githubLinkLabel={quizMeApp.ariaRepository}
            githubLinkText={s.buttonRepository}
          />

          <Project
            title="2-Day-Weather"
            desc={movye.description}
            imageSrc={Movye}
            websiteLink="https://2-day-weather.vercel.app/"
            websiteLinkTarget="_blank"
            websiteLinkLabel={movye.ariaWebsite}
            websiteLinkText={s.buttonWebsite}
            githubLink="https://github.com/Yerola/2Day-Weather"
            githubLinkTarget="_blank"
            githubLinkLabel={movye.ariaRepository}
            githubLinkText={s.buttonRepository}
          />

          <Project
            title="Whiteboard"
            desc={whiteboard.description}
            imageSrc={Whiteboard}
            websiteLink="https://whiteboard-yl.vercel.app/"
            websiteLinkTarget="_blank"
            websiteLinkLabel={whiteboard.ariaWebsite}
            websiteLinkText={s.buttonWebsite}
            githubLink="https://github.com/Yerola/whiteboard"
            githubLinkTarget="_blank"
            githubLinkLabel={whiteboard.ariaRepository}
            githubLinkText={s.buttonRepository}
          />
        </div>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
