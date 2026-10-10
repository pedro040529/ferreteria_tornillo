const InfoBox = ({
  heading,
  icon: Icon,
  backgroundColor = 'bg-gray-100',
  textColor = 'text-gray-800',
  buttonInfo,
  children,
}) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      {Icon && (
        <span className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-2xl text-blue-700'>
          <Icon aria-hidden='true' />
        </span>
      )}
      <h2 className={`${textColor} text-2xl font-bold`}>
        {heading}
      </h2>

      <p className={`${textColor} mt-2 mb-4`}>
        {children}
      </p>

      {buttonInfo && (
        <a
          href={buttonInfo.link}
          className={`inline-block ${buttonInfo.backgroundColor} text-white rounded-lg px-4 py-2 hover:opacity-80`}
        >
          {buttonInfo.text}
        </a>
      )}
    </div>
  );
};

export default InfoBox;
