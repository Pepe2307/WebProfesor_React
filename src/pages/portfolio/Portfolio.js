import PageHeader from "../../components/PageHeader";
import Project from "../../components/Project";
import projectData from "./projectsData.json";

const Portfolio = () => {
  const ProjectList = () =>
    projectData.map((project, i) => (
      <Project
        key={i}
        id={project.id}
        title={project.title}
        technologies={project.technologies}
        image={project.image}
        color={project.bgcolor}
        github={project.github}
        deployed={project.deployed}
        description={project.description}
      />
    ));

  return (
    <section className="portfolio">
      <PageHeader title="Nuestros cursos" description="Educacion gratuita" />
      <div className="row">
        <ProjectList />
      </div>
    </section>
  );
};

export default Portfolio;
