import React, { useState } from 'react';


function AboutUs({ }) {


    return (
        <div id='aboutUs' className="container text-center" style={{ padding: '50px', }}>
            <div
                style={{

                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                }}>
                <h2 style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.2)', borderRadius: '15px', padding: '15px', marginBottom: '50px', border: '6px solid #242424', color: '#f17a96' }}>About Us</h2>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div style={{ paddingBottom: '25px' }}>
                        <h3>Our Mission</h3>
                        <p>At Done With Dust, we understand the importance of a clean and comfortable home. Our residential cleaning service is designed to provide top-notch cleaning solutions for your home, apartment, or any other residential space. We have a team of expert cleaners who are dedicated to making your living space sparkling clean and organized. From dusting to vacuuming and everything in between, we cover every aspect of residential cleaning to ensure your complete satisfaction.</p>
                    </div>
                    <div style={{ paddingBottom: '25px' }}>

                        <h2>Who We Are...</h2>
                        <p>
                            Nestled in the heart of Miami, our founder, Joshua, embarked on a transformative journey driven by a simple yet powerful realization: reliable and exceptional cleaning services are a rare find in the bustling urban landscape. Through personal trials and a quest for quality, Joshua's own struggles ignited the spark for a revolution in cleaning services. Inspired by his experiences, he meticulously curated a team of detail-oriented professionals who shared his vision and commitment to excellence.
                            <br />
                            <br />
                            At our core, we recognize that cleaning is not just a task; it's an art that has the potential to transform environments and lives. We're not content with mediocrity. Instead, we're dedicated to crafting spaces that radiate freshness, comfort, and revitalization. Our handpicked team, carefully chosen for their exceptional skills and unwavering dedication, ensures that every space we touch undergoes a profound and meticulous rejuvenation.
                            <br />
                            <br />
                            What sets us apart is our belief that every client is a partner in our mission. We've redefined the cleaning service industry by fostering genuine connections and understanding that cleanliness profoundly impacts well-being. Our success story is rooted in transforming frustration into inspiration, and through our journey, we're elevating the standards of cleaning services in Miami and beyond. Join us in experiencing the difference that passion, dedication, and an artistic approach to cleanliness can make.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
