import Head from 'next/head'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import WorkExperience from '../components/WorkExperience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7A80A]/80">
      <Head>
        <title>Harsh Portfolio</title>
      </Head>

      <Header/>

      <section id="hero" className="snap-start">
        <Hero/>
      </section>


      <section id="about" className="snap-center">
        <About/>
      </section>


      <section id="experience" className="snap-center">
        <WorkExperience/>
      </section>


      <section id="skills" className="snap-start">
        <Skills/>
      </section>


      <section id="projects" className="snap-start">
        <Projects/>
      </section>


      <section id="contactme" className="snap-start">
        <ContactMe/>
      </section>
    </div>
  )
}

export default Home;
