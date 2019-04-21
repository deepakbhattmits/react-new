import React from 'react';


const SearchBar = ( props ) => {

    return (
        <div>
            <form className="ui form " onSubmit={ props.getRecipe } style={{ margin: '10px' }}>
                <div className="ui search focus">
                        <div className="ui icon input">
                            <input  
                                className='prompt'
                                type='text'
                                name='recipeName'
                                placeholder='search here...'
                                autoComplete='off'
                            />
                            <i className="search icon"></i>
                        </div>
                    </div>
            </form>
        </div>
    );
};
export default SearchBar;