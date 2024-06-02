import projectImg from "../no-projects.png";
import Button from "./Button";

export default function NoProject({ onSelectAdd }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={projectImg} className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select A Project Or Get Started With A New One
      </p>
      <p className="mt-8">
        <Button onClick={onSelectAdd}>Create New Project</Button>
      </p>
    </div>
  );
}
