const SkillCard = (props: { title: string; skills: string[] }) => {
  const { title, skills } = props;

  return (
    <div className='block rounded-lg bg-white drop-shadow-md mb-4 md:flex-1 md:basis-4/12'>
      <div className='border-b-2 border-neutral-200 px-6 py-3 font-bold'>
        {title}
      </div>
      <ul className='p-6'>
				{skills.map((skill, idx) => (
					 <li key={idx}>&#x2022; {skill}</li>
				))}
      </ul>
    </div>
  );
};

export default SkillCard;
