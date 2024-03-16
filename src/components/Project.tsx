const Project = (props: {
  imgPath: string;
  title: string;
  description: string;
  link: string;
}) => {
  const { title, imgPath, description, link } = props;

  return (
    <a
      className='block rounded-lg bg-white drop-shadow-md basis-4/12'
      href={link}
      target='_blank'
    >
      <div className='relative overflow-hidden bg-cover bg-no-repeat'>
        <img className='rounded-t-lg' src={imgPath} alt='' />
      </div>
      <div className='border-b-2 border-neutral-200 px-6 py-3 font-bold'>
        {title}
      </div>
      <div className='p-6'>{description}</div>
    </a>
  );
};

export default Project;
