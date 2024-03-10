import Image from 'next/image';
import { Roboto_Slab } from 'next/font/google';
import SkillCard from '@/components/SkillCard';
import Project from '@/components/Project';

const font = Roboto_Slab({ subsets: ['latin'] });

export default function Home() {
  return (
    <div
      className={`min-h-screen flex flex-col md:flex-row md:overflow-hidden ${font.className}`}
    >
      <header
        className='bg-gradient-to-r from-gray-500 to-zinc-600 text-white p-4 
        md:w-1/4 md:h-screen md:flex md:item-center md:justify-center md:flex-col'
      >
        <div className='flex justify-center'>
          <Image
            src='/portfolio/avatar.jpg'
            alt='Vercel Logo'
            className='rounded-full'
            width={120}
            height={120}
            priority
          />
        </div>
        <div className='flex justify-center text-2xl md:text-3xl font-bold mt-4 md:mt-8'>
          Alicia Chen
        </div>
        <div className='flex justify-center text-lg md:text-xl mt-2 md:mt-4'>
          Software Engineer
        </div>
        <div className='flex justify-center text-md md:mt-2'>
          <div>Singapore</div>
        </div>
        <div className='flex justify-center gap-4 mt-2 md:mt-4'>
          <a href='https://github.com/aliciacyy' target='_blank'>
            <Image
              src='/portfolio/github.png'
              alt='Vercel Logo'
              className='cursor-pointer'
              width={24}
              height={24}
              priority
            />
          </a>
          <a href='https://www.linkedin.com/in/alicia-chenyy/' target='_blank'>
            <Image
              src='/portfolio/linkedin.png'
              alt='Vercel Logo'
              className='cursor-pointer'
              width={24}
              height={24}
              priority
            />
          </a>
        </div>
      </header>

      <main className='flex-1 p-4 md:p-8 md:h-screen overflow-auto'>
        <h2 className='text-2xl mb-4 font-bold md:mt-4'>{'// Hello World!'}</h2>
        <p>
          A senior software engineer based in Singapore with 8+ years of 
          <span className='font-bold'> full-stack</span> engineering experience in designing, developing, and
          maintaining software, primarily in web applications for B2B use cases.
        </p>
        <p>
          Looking to expand and grow my technical knowledge as well as improving on
          soft skills to further my career path.
        </p>
        <p>
          <span className='font-bold'>Current status:</span> Open to new opportunities - contact me via LinkedIn!
        </p>

        <h2 className='text-2xl mb-4 font-bold mt-8'>{'// Work Experience'}</h2>
        <p className='font-bold'>Neurowyzr, Singapore (Jan 2023 - Present)</p>
        <p className='italic'>Senior Software Engineer</p>
        <p className='mb-4'>
          Taking on a more backend-centric role, worked on delivering various
          microservices ranging from customer facing applications to generic
          internal services that can be reused by different services for similar
          use cases.
        </p>
        <p className='font-bold'>ViSenze, Singapore (Sep 2018 - Dec 2022)</p>
        <p className='italic'>Software Engineer</p>
        <p className='mb-4'>
          Full-stack experience working in the application team to deliver new
          features and maintaining support for external facing tools, primarily
          ViSenze Discovery Suite.
        </p>
        <p className='font-bold'>
          Works Applications Singapore Pte. Ltd., Singapore (Oct 2015 - Aug
          2018)
        </p>
        <p className='italic'>Software Engineer</p>
        <p>
          Full-stack software engineer leading a small sub-team to fulfill
          features for our software and providing continuous technical support,
          mainly on HUE - Expense Management.
        </p>

        <h2 className='text-2xl mb-4 font-bold mt-8'>{'// Education'}</h2>
        <p className='font-bold'>
          Nanyang Technological University (2011 - 2015)
        </p>
        <p>Bachelor of Engineering (Computer Science)</p>

        <h2 className='text-2xl mb-4 font-bold mt-8'>
          {'// Technical Skills'}
        </h2>
        <div className='md:flex md:gap-4'>
          <SkillCard
            title='Programming Languages'
            skills={['Java', 'Scala', 'Python', 'C++', 'C', 'SQL']}
          />
          <SkillCard
            title='Web Development'
            skills={[
              'HTML5/CSS3',
              'Angular/AngularJS',
              'React',
              'LESS/SASS',
              'Javascript',
              'jQuery',
              'Google Closure',
              'PHP',
              'XML',
            ]}
          />
          <SkillCard
            title='Database and Others'
            skills={[
              'MongoDB',
              'PostgreSQL',
              'DynamoDB',
              'Git',
              'Docker',
              'IntelliJ IDEA',
              'Eclipse',
              'AWS',
            ]}
          />
        </div>

        <h2 className='text-2xl mb-4 font-bold mt-8'>
          {'// Personal Projects'}
        </h2>
        <p className='mb-4'>Featuring a few of my favourite personal projects.</p>
        <div className='md:flex md:gap-4'>
          <Project
            title='TwoWordy'
            imgPath='/portfolio/twowordy.png'
            link='https://twowordy.com/'
            description="A web game where players can play with each other online in real-time to guess their opponents' words."
          />
        </div>

        <div className='italic mt-8'>
          Icons from Flaticon. All rights reserved.
        </div>
      </main>
    </div>
  );
}
