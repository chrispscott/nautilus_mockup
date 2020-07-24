import React from 'react';

class Prime extends React.Component {
    render() {
        return (
            <div className='container-prime'>
                <section className='content-area'>
                    <section className='header'>
                        <h1 className=''>Nautilus Prime</h1>
                        <h5>GET THE FULL NAUTILUS DIGITAL EXPERIENCE.</h5>
                        <button className='signup'> MEMBERS SIGN IN </button>
                    </section>
                    <section className='image-box'>
                        <img src='##' alt=' image'></img>
                    </section>
                    <section className='story-list'>
                        <h4>Like Nautilus? You'll love Nautilus Prime</h4>
                        <h4><span>Unlimited online reading</span>Read it all, whenever, and however you like.</h4>

                        <h4><span>Ad Free</span>Get a pristine, ad-free reading experience.</h4>

                        <h4><span>Tablet editions</span>All the content and design of our award-winning print magazine, in PDF format--perfect for reading on your tablet or desktop</h4>

                        <h4><span>eBook editions</span>We've made each monthly online issue into an eBook, compatible with most e-readers.</h4>

                        <h4><span>Event Access</span>Prime members get priority access to Nautilus events.</h4>

                        <button>LEARN MORE</button>
                        <button>JOIN PRIME</button>

                    </section>

                </section>
            </div>
        );
    }
}

export default Prime;