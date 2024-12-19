import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'; // Ensure this import path is correct
import { skillsData } from '@/data'; // Ensure this path is correct based on your file structure

interface SkillCategory {
  category: string;
  items: string[];
}

interface SkillsProps {
  skills: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = () => {  // Default value of an empty array

  if (!skillsData.length) {
    return <div>No skills available</div>;  // Optional: Show a message if skills are empty
  }

  return (
    <div id="skills">
  <section>
    <h1 className="heading">
      My <span className="text-purple">Skills</span>
    </h1>
    <Tabs defaultValue="All" className="w-full pt-5 pb-5 ">
      {/* TabsList with responsive grid layout and flexbox for small screens */}
      <TabsList
  className="flex flex-wrap justify-center gap-4 lg:grid lg:grid-flow-col lg:justify-stretch sm:justify-start sm:text-xs  md:text-sm lg:text-lg"
>
  {skillsData.map((category) => (
    <TabsTrigger
      key={category.category}
      value={category.category}
      className="px-4 py-2 rounded-md hover:bg-gray-200 flex justify-center items-center text-center whitespace-nowrap overflow-hidden"
    >
      {category.category}
    </TabsTrigger>
  ))}
</TabsList>



      {skillsData.map((category) => (
        <TabsContent key={category.category} value={category.category}>
              <div className="overflow-auto mt-5">
          <div className="w-full flex justify-center">
                  <ol className="w-full max-w-4xl border border-gray-300 rounded-lg">
              {category.items.map((item, index) => (
                      <li
                        key={index}
                        className={`flex items-center px-4 py-3 text-left`}
                      >
                <span className="w-10 text-right font-semibold ">
                          {index + 1}.
                        </span>
                        <span className="flex-1 text-center  font-medium">
                          {item}
                        </span>
                      </li>
              ))}
            </ol>
          </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  </section>
</div>

  );
};

export default Skills;
