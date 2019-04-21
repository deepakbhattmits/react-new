import React , { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
const API_KEY  = `209e1a0d02a7b3e2c423e14995ac0a55`;
// const API_URL = `https://www.food2fork.com/api/search?key=${API_KEY}&q=${}&count=5`;

class SearchList extends Component {
    state = { data:[]}
    getRecipe = ( e ) => {
        const term = e.target.elements.recipeName.value;

        e.preventDefault();
        // console.log('from list term ',term )
        fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${ API_KEY }&q=${ term }&count=5`,)
          .then(response => response.json())
          
          .then((json) => {
         // console.log('pre test : ',json, "TEST : ",json.data);             
            this.setState({ data : json });
       
          }).catch(function(error) {
            // console.log("error:", error);
      });

        // const api_call = await fetch(`https://www.food2fork.com/api/search?key=${ API_KEY }&q=${ term }&count=5`);
       //  const responce = await api_call.json();
        // console.log('from list response ',this.state.data )
    }
    render() {
        return (
            <div className=''>
                <div className="ui search">
                    <SearchBar getRecipe = { this.getRecipe } />
                </div>
                <SearchResult data={ this.state.data } />
            </div>
        );
    }
};
export default SearchList;