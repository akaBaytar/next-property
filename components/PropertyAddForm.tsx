const PropertyAddForm = () => {
  return (
    <form>
      <div className='mb-6'>
        <label htmlFor='type' className='block text-gray-700 font-bold mb-2'>
          Property Type
        </label>
        <select
          id='type'
          name='type'
          className='border rounded-md w-full py-2 px-3'
          required>
          <option value='Apartment'>Apartment</option>
          <option value='Condo'>Condo</option>
          <option value='House'>House</option>
          <option value='CabinOrCottage'>Cabin or Cottage</option>
          <option value='Room'>Room</option>
          <option value='Studio'>Studio</option>
          <option value='Loft'>Loft</option>
          <option value='Chalet'>Chalet</option>
          <option value='Other'>Other</option>
        </select>
      </div>
      <div className='mb-6'>
        <label className='block text-gray-700 font-bold mb-2 rounded-md'>
          Listing Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className='border rounded w-full py-2 px-3 mb-2'
          placeholder='eg. Beautiful Apartment In Miami'
          required
        />
      </div>
      <div className='mb-6'>
        <label
          htmlFor='description'
          className='block text-gray-700 font-bold mb-2'>
          Description
        </label>
        <textarea
          id='description'
          name='description'
          className='border rounded-md w-full py-2 px-3 resize-none'
          rows={6}
          placeholder='Add an optional description of your property'
        />
      </div>
      <div className='mb-4 bg-indigo-50 p-4 rounded-md'>
        <label className='block text-gray-700 font-bold mb-2'>Location</label>
        <input
          type='text'
          id='street'
          name='location.street'
          className='border rounded-md w-full py-2 px-3 mb-2'
          placeholder='Street'
        />
        <input
          type='text'
          id='city'
          name='location.city'
          className='border rounded-md w-full py-2 px-3 mb-2'
          placeholder='City'
          required
        />
        <input
          type='text'
          id='state'
          name='location.state'
          className='border rounded-md w-full py-2 px-3 mb-2'
          placeholder='State'
          required
        />
        <input
          type='text'
          id='zipCode'
          name='location.zipCode'
          className='border rounded-md w-full py-2 px-3 mb-2'
          placeholder='Zip Code'
        />
      </div>
      <div className='mb-4 flex flex-wrap'>
        <div className='w-full sm:w-1/3 mt-2'>
          <label htmlFor='beds' className='block text-gray-700 font-bold mb-2'>
            Beds
          </label>
          <input
            type='number'
            id='beds'
            name='beds'
            className='border rounded-md w-full py-2 px-3'
            required
          />
        </div>
        <div className='w-full sm:w-1/3 mt-2'>
          <label htmlFor='baths' className='block text-gray-700 font-bold mb-2'>
            Baths
          </label>
          <input
            type='number'
            id='baths'
            name='baths'
            className='border rounded-md w-full py-2 px-3'
            required
          />
        </div>
        <div className='w-full sm:w-1/3 mt-2'>
          <label
            htmlFor='square_feet'
            className='block text-gray-700 font-bold mb-2'>
            Square Feet
          </label>
          <input
            type='number'
            id='square_feet'
            name='square_feet'
            className='border rounded-md w-full py-2 px-3'
            required
          />
        </div>
      </div>
      <div className='mb-6'>
        <label className='block text-gray-700 font-bold mb-2'>Amenities</label>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2 text-xs'>
          <div className='flex items-center'>
            <input
              type='checkbox'
              id='amenity_wifi'
              name='amenities'
              value='Wifi'
              className='me-2'
            />
            <label htmlFor='amenity_wifi'>Wifi</label>
          </div>
          <div className='flex items-center'>
            <input
              type='checkbox'
              id='amenity_kitchen'
              name='amenities'
              value='Full kitchen'
              className='me-2'
            />
            <label htmlFor='amenity_kitchen'>Full kitchen</label>
          </div>
          <div className='flex items-center'>
            <input
              type='checkbox'
              id='amenity_washer_dryer'
              name='amenities'
              value='Washer & Dryer'
              className='me-2'
            />
            <label htmlFor='amenity_washer_dryer'>Washer & Dryer</label>
          </div>
          <div className='flex items-center'>
            <input
              type='checkbox'
              id='amenity_free_parking'
              name='amenities'
              value='Free Parking'
              className='me-2'
            />
            <label htmlFor='amenity_free_parking'>Free Parking</label>
          </div>
          <div className='flex items-center'>
            <input
              type='checkbox'
              id='amenity_pool'
              name='amenities'
              value='Swimming Pool'
              className='me-2'
            />
            <label htmlFor='amenity_pool'>Swimming Pool</label>
          </div>
          <div className='flex items-center'>
            <input
              type='checkbox'
              id='amenity_hot_tub'
              name='amenities'
              value='Hot Tub'
              className='me-2'
            />
            <label htmlFor='amenity_hot_tub'>Hot Tub</label>
          </div>
          <div className='flex items-center'>
            <input
              type='checkbox'
              id='amenity_24_7_security'
              name='amenities'
              value='24/7 Security'
              className='me-2'
            />
            <label htmlFor='amenity_24_7_security'>24/7 Security</label>
          </div>
          <div className='flex items-center'>
            <input
              type='checkbox'
              id='amenity_wheelchair_accessible'
              name='amenities'
              value='Wheelchair Accessible'
              className='me-2'
            />
            <label htmlFor='amenity_wheelchair_accessible'>
              Wheelchair Accessible
            </label>
          </div>
          <div className='flex items-center'>
            <input
              type='checkbox'
              id='amenity_elevator_access'
              name='amenities'
              value='Elevator Access'
              className='me-2'
            />
            <label htmlFor='amenity_elevator_access'>Elevator Access</label>
          </div>
          <div className='flex items-center'>
            <input
              type='checkbox'
              id='amenity_dishwasher'
              name='amenities'
              value='Dishwasher'
              className='me-2'
            />
            <label htmlFor='amenity_dishwasher'>Dishwasher</label>
          </div>
          <div className='flex items-center'>
            <input
              type='checkbox'
              id='amenity_gym_fitness_center'
              name='amenities'
              value='Gym/Fitness Center'
              className='me-2'
            />
            <label htmlFor='amenity_gym_fitness_center'>
              Gym/Fitness Center
            </label>
          </div>
          <div className='flex items-center'>
            <input
              type='checkbox'
              id='amenity_air_conditioning'
              name='amenities'
              value='Air Conditioning'
              className='me-2'
            />
            <label htmlFor='amenity_air_conditioning'>Air Conditioning</label>
          </div>
          <div className='flex items-center'>
            <input
              type='checkbox'
              id='amenity_balcony_patio'
              name='amenities'
              value='Balcony/Patio'
              className='me-2'
            />
            <label htmlFor='amenity_balcony_patio'>Balcony/Patio</label>
          </div>
          <div className='flex items-center'>
            <input
              type='checkbox'
              id='amenity_smart_tv'
              name='amenities'
              value='Smart TV'
              className='me-2'
            />
            <label htmlFor='amenity_smart_tv'>Smart TV</label>
          </div>
          <div className='flex items-center'>
            <input
              type='checkbox'
              id='amenity_coffee_maker'
              name='amenities'
              value='Coffee Maker'
              className='me-2'
            />
            <label htmlFor='amenity_coffee_maker'>Coffee Maker</label>
          </div>
        </div>
      </div>
      <div className='mb-4 bg-indigo-50 p-4 rounded-md'>
        <label className='block text-gray-700 font-bold mb-2'>
          Rates (Leave blank if not applicable)
        </label>
        <div className='flex flex-col gap-4 sm:flex-row sm:justify-between'>
          <div className='flex items-center'>
            <label htmlFor='weekly_rate' className='me-2'>
              Weekly
            </label>
            <input
              type='number'
              id='weekly_rate'
              name='rates.weekly'
              className='border rounded-md w-full py-2 px-3'
            />
          </div>
          <div className='flex items-center'>
            <label htmlFor='monthly_rate' className='me-2'>
              Monthly
            </label>
            <input
              type='number'
              id='monthly_rate'
              name='rates.monthly'
              className='border rounded-md w-full py-2 px-3'
            />
          </div>
          <div className='flex items-center'>
            <label htmlFor='nightly_rate' className='me-2'>
              Nightly
            </label>
            <input
              type='number'
              id='nightly_rate'
              name='rates.nightly'
              className='border rounded-md w-full py-2 px-3'
            />
          </div>
        </div>
      </div>
      <div className='mb-6'>
        <label
          htmlFor='seller_name'
          className='block text-gray-700 font-bold mb-2'>
          Seller Name
        </label>
        <input
          type='text'
          id='seller_name'
          name='seller_info.name.'
          className='border rounded-md w-full py-2 px-3'
          placeholder='Name'
        />
      </div>
      <div className='mb-6'>
        <label
          htmlFor='seller_email'
          className='block text-gray-700 font-bold mb-2'>
          Seller Email
        </label>
        <input
          type='email'
          id='seller_email'
          name='seller_info.email'
          className='border rounded-md w-full py-2 px-3'
          placeholder='Email address'
          required
        />
      </div>
      <div className='mb-6'>
        <label
          htmlFor='seller_phone'
          className='block text-gray-700 font-bold mb-2'>
          Seller Phone
        </label>
        <input
          type='tel'
          id='seller_phone'
          name='seller_info.phone'
          className='border rounded-md w-full py-2 px-3'
          placeholder='Phone'
        />
      </div>
      <div className='mb-6'>
        <label htmlFor='images' className='block text-gray-700 font-bold mb-2'>
          Images (Select up to 4 images)
        </label>
        <input
          type='file'
          id='images'
          name='images'
          className='border rounded-md w-full py-2 px-3 cursor-pointer'
          accept='image/*'
          multiple
          required
        />
      </div>
      <div>
        <button
          className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline'
          type='submit'>
          Add Property
        </button>
      </div>
    </form>
  );
};

export default PropertyAddForm;
