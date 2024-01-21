import Who from "../components/Who";
import AboutData from "../components/AboutData";
import { Container } from "postcss";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-stretch p-24 space-y-10">
      <h1 className="text-5xl font-mono text-center mb-5">
        Política de privacidad (Zorvax)
      </h1>

      <div className=" flex-1">
        <Who />
        <AboutData />
      </div>

      <bottom className="items-center">
        <h3 className=" text-xs">Pedro Quiroga - 2024</h3>
        <a
          href="https://www.linkedin.com/in/pedro-quiroga/"
          className=" text-cyan-600"
        >
          <p className=" text-center ">linkedIn</p>
        </a>
      </bottom>
    </main>
  );
}
