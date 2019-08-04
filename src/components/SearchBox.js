import React from 'react';

const SearchBox =({searchchange})=>{
	return(
	<div>
	<input onChange={searchchange} className="pa3 ba b--green bg-lightest-blue"
	type ='search' 
	placeholder ='Search Robots'
	/>
	</div>
		);
}
export default SearchBox;