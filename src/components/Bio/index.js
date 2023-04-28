import React from 'react'
import {FiUser} from 'react-icons/fi'

import headshot from '../../media/bio/zach.jpg';

const Bio = () => {

    return (
        <div id="bio" className="transition-all mb-4 py-12 px-4 relative w-full bg-white rounded flex lg:flex-row flex-col items-start justify-center">
            <div className="lg:w-2/5 w-full  flex flex-col justify-center items-center">
                <img src={headshot} alt="Head shot" className="w-5/6 rounded-full mb-4 shadow" />
                <h3 className="text-black text-4xl font-sans font-bold">Zach Bainter</h3>
            </div>
            <div className="lg:w-3/5 lg:m-0 mt-8 w-full flex flex-col">
                <div className="w-full mb-2">
                    <h2 className=" text-black text-6xl font-serif">BIO</h2>
                </div>
                <div className="w-full">
                    <p className=" text-gray-700">
                    Hello and welcome to my website! My name is Zach Bainter, and I am a passionate chef, gardener, and farmer with over 20 years of experience in the culinary industry. As an excellent host, I love to bring people together over delicious food and create unforgettable dining experiences.<br /><br />
In addition to my culinary expertise, I am also a professional director and photographer specializing in food and chef stories. I love to capture the beauty of food and the stories behind the people who create it. <br /><br />

As an event services specialist, I have the skills and experience necessary to bring your vision to life. Whether you are hosting a small dinner party or a large corporate event, I can provide customized menus, beautiful decor, and exceptional service to ensure your event is a success. <br /><br />

I am a social person who enjoys connecting with others over shared interests, and I believe that food is a universal language that brings people together. When I'm not in the kitchen or tending to my garden and farm, you can find me exploring new culinary trends, meeting with fellow food enthusiasts, and sharing my love of food with others. <br /> <br />

Thank you for visiting my website, and I look forward to sharing my culinary journey with you!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Bio;