import { DotsHorizontalIcon, PlusIcon, ViewGridIcon, ViewListIcon } from "@heroicons/react/outline";
import { DashboardLayout, ProjectCard } from "../components";

const Projects = () => {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <button className="bg-white rounded-lg">
            <ViewListIcon className="text-[#bbbbbb] w-8" />
          </button>
          <button className="bg-[#dbf6fe] rounded-lg">
            <ViewGridIcon className="text-[#33cff8] w-8" />
          </button>
        </div>
        <button className="btn btn-primary">
          <PlusIcon className="w-5" />
        </button>
      </div>
      <div className="flex justify-between items-center my-6">
        <h2 className="text-lg font-semibold">Working(2)</h2>
        <DotsHorizontalIcon className="w-6" />
      </div>
      <div className="space-y-4">
        <ProjectCard />
        <ProjectCard />
      </div>
    </DashboardLayout>
  );
};

export default Projects;
