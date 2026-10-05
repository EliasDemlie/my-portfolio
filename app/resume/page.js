import About from "../sections/About";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";

export const metadata = { title: "Resume | Elias Demlie" };

export default function ResumePage() {
  return (
    <div className="pt-16">
      <About />
      <Experience />
      <Skills />
    </div>
  );
}
