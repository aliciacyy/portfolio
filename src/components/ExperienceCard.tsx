import Image from 'next/image';

const ExperienceCard = (props: { company: string, title: string; description: string, img: string }) => {
  const { company, title, description, img } = props;

  return (
    <div className='rounded-lg bg-white drop-shadow-md block mb-4 md:flex-1 md:basis-4/12'>
      <div className='flex border-b-2 border-neutral-200'>
        <div className='px-4 py-4'>
          <Image
            src={`/portfolio/${img}.jpg`}
            alt='Neurowyzr'
            className='rounded-md'
            width={50}
            height={50}
            priority
          />
        </div>
        <div>
          <div className='px-4 pt-4 font-bold'>{company}</div>
          <div className='px-4 pt-1 pb-4 italic'>{title}</div>
        </div>
      </div>
      <div className='px-4 py-3'>{description}</div>
    </div>
  );
};

export default ExperienceCard;
