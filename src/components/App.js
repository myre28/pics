import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {

    state = { images: [] };
    /*  onSearchSubmit(term){
      axios.get('https://api.unsplash.com/search/photos',{
          params: {query: term},
          headers: {
             Authorization: 'Client-ID HsgUtromjmbQdzpQ4GWwJY4DghtVYZmLMYoMA7q-qNU'
          }
      }).then(response =>{
          console.log(response.data.results);
      });
         
     } */


     onSearchSubmit =async  (term) =>{
        const response =await
            unsplash.get('/search/photos', {
                params: { query: term },
               
            });
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
};

export default App;