

import ProgressBar from "@ramonak/react-progress-bar";

const MySkill = () => {
    return (
       <div>

        <div className="mt-10 lg:flex justify-center gap-5">
            <div className="lg:w-[500px] h-[450px] bg-blue-950 rounded-3xl mt-10">
                <h1 className="text-3xl font-bold text-yellow-400 ml-10 pt-10">EDUCATION</h1>
                <p className="ml-10 pt-2"> Information and Communication Technology</p>
            </div>

            <div className="lg:w-[500px] h-[450px] bg-blue-950 rounded-3xl mt-10">
                <h1 className="text-3xl font-bold text-yellow-400 ml-10 ">Skills</h1>
        <p className="font-bold pl-5 pt-3">HTML & CSS </p>
         <ProgressBar className="p-5" completed={95} bgColor="#FFA500" transitionDuration="3s" transitionTimingFunction="ease-in-out"
  />

<p className="font-bold pl-5 pt-3">HTML </p>
         <ProgressBar className="p-5" completed={95} bgColor="#FFA500" transitionDuration="3s" transitionTimingFunction="ease-in-out"
  />

<p className="font-bold pl-5 pt-3">HTML </p>
         <ProgressBar className="p-5" completed={95} bgColor="#FFA500" transitionDuration="3s" transitionTimingFunction="ease-in-out"
  />
<p className="font-bold pl-5 pt-3">HTML </p>
         <ProgressBar className="p-5" completed={95} bgColor="#FFA500" transitionDuration="3s" transitionTimingFunction="ease-in-out"
  />
            </div>
        </div>

        <div>
    <h1 className="text-5xl font-bold text-center mt-10">EXPERIENCE</h1>
    <p className="mt-3 text-center">What I have done?</p>
</div>

        </div>
    );
};

export default MySkill;