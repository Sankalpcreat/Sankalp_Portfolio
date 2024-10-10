import { Badge, Tooltip } from '@radix-ui/themes'
import React from 'react'
import { bricolage_grotesque } from '@/lib/fonts'
import Title from './Title'
import { TooltipProvider } from '@radix-ui/react-tooltip';

const Skills = () => {
  return (
    <TooltipProvider>
      <div  id="skills" className='w-full flex flex-col items-center mt-4 pb-8'>
        <Title title='Skills' />

        <div className="flex w-full flex-col max-lg:flex-row max-sm:flex-row gap-3 max-sm:gap-2 lg:flex-row mt-4 px-40 max-[1285px]:px-24 max-lg:px-28 max-sm:px-6 flex-wrap justify-end items-center">
          {
            data.map((skill, idx) => (
              <Tooltip key={idx} content={skill}>
                <Badge
                  color="gray"
                  variant="solid"
                  highContrast
                  className={`text-lg max-sm:text-[14px] dark:hover:bg-gray-300 py-2 px-4 cursor-pointer hover:bg-gray-800 ${bricolage_grotesque}`}
                >
                  {skill}
                </Badge>
              </Tooltip>
            ))
          }
        </div>
      </div>
    </TooltipProvider>
  )
}

export default Skills

const data: string[] = ["NextJS","TypeScript","React","Tailwind CSS","NodeJS","Express","MongoDB","MySQL","REST APIs","GitHub","Vercel","Git","Postgresql","Postman","Aws","Docker","Java","Redux","Zod","Github Pages","Shadcn","Redis","Vite","React hook form","JWT","Webhooks"];
