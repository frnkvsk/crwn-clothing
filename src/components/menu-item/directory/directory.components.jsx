import React from "react";

import sections from './directory.data';
import MenuItem from "../menu-item.component";
import './directory.styles.scss';

class Directory extends React.Component {
   constructor() {
      super();

      this.state = {
         sections: []
      }
   }

   componentDidMount() {
      this.setState({sections: sections})
   }

   render() {
      
      return (
         <div className='directory-menu'>
            {
               this.state.sections.map(e => (
                  <MenuItem key={e.id} title={e.title.toUpperCase()} imageUrl={e.imageUrl} size={e.size}/>
               ))
            }         
         </div>
      )
   }
}
// this.state.sections.map(e => (
//    <MenuItem key={e.id} title={e.title} imageUrl={e.imageUrl} />
// ))
export default Directory;