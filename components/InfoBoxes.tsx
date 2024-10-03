import InfoBox from './InfoBox';

const InfoBoxes = () => {
  return (
    <section>
      <div className='container max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <InfoBox
            title='For Renters'
            text='Find your dream rental property. Bookmark properties and contact owners.'
            link='/properties'
            buttonText='Browse Properties'
            className='bg-gray-100'
            buttonClassName='bg-black hover:bg-gray-900'
          />
          <InfoBox
            title='For Property Owners'
            text='List your properties and reach potential tenants. Rent as an airbnb or long term.'
            link='/properties/add'
            buttonText='Add Property'
            className='bg-indigo-100'
            buttonClassName='bg-indigo-500 hover:bg-indigo-600'
          />
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
