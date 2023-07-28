import Hero from '@/view/Hero/page'
import About from '@/view/About/page'
import Skills from '@/view/Skills/page'
import Services from '@/view/Services/page'
import Projects from '@/view/Projects/page'
import Contact from '@/view/Contactme/page'
import Card from './cards/page'



export default function Home() {
  return (
   <div>
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      
      <Contact/>
   </div>
  )
}
