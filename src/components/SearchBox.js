import React from 'react';


const SearchBox=({searchfield,searchChange})=>{

	return (
		<div className='pa2'>
			<input type='search'
				placeholder='Enter robot Name'
				onChange={searchChange}
				/>
		</div>
		);


}

export default SearchBox;
