import React, { useRef, useEffect } from 'react';
import Footer from '../Footer';
import Header from './../Header';
import Portfolio from './../Portfolio';

// import booksImage from './../../assets/img/books.jpg';
// import image from './../../assets/img/pexels-wallace-chuck-3749989.jpg';

const Home = (props) => {
    return (
        <>
            <Header/>
            <div className="container">
                <Portfolio />

            </div>
            <Footer/>
        </>    
    )
    
}

export default Home;

// import React from 'react';
// // ref can only be used on class components
// class SomeComponent extends Component {
//   // get a reference to the element after the component has mounted
//   componentDidMount(){
//     M.Sidenav.init(this.sidenav);
//   }

//   render(){
//     return (
//       <ul className={this.props.classes}
//           ref={ (sidenav) => {this.sidenav = sidenav} }
//           id={this.props.id}>
//         // menuItems
//       </ul>
//     )
//   }
// }