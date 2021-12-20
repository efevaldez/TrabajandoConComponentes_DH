import React from 'react';

import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import Card from './Card';
import MoviesList from './MoviesList';






function ContentWrapper(){
    return (
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <Card/>
                    <MoviesList/>
                    <Footer/>
                </div>
            </div>    
    )
}
export default ContentWrapper;