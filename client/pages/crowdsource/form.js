import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

function Form() {
    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [waterlevelfactor, setWaterlevelfactor] = useState('');
    const [location, setLocation] = useState('');
    const [message, setMessage] = useState('');
    const [activeOption, setActiveOption] = useState(0);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let latitude, longitude;
        const waterLevelAdjusted = height * waterlevelfactor;

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                sendData({ latitude, longitude, waterLevelAdjusted });
            },  
            (error) => {
                latitude = 0;
                longitude = 0;
                sendData({ latitude, longitude, waterLevelAdjusted });
            }
        );
    };

    const sendData = async (data) => {
      console.log('data:',data);
  
      const sendata = {
          name: name,
          waterlevel: data.waterLevelAdjusted,
          location: location,
          latitude: data.latitude,
          longitude: data.longitude,
      }
  
      console.log('sendata:',sendata);
      try {
          const response = await axios.post(process.env.API_URL || 'http://localhost:8000/crowdsource/data/', sendata );
          setMessage(response.data.message);
      } catch (error) {
          console.error('Error storing data:', error);
          setMessage('Error: Unable to store data.');
      }
  };

    const handleOption = (value, option) => () => {
        setWaterlevelfactor(value);
        setActiveOption(option);
    };

    return (
        <div className="w-full min-h-screen bg-cover bg-[url('/img/index/herobg.png')] bg-fixed pt-40 rounded-lg shadow-md">
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-semibold mb-6 text-slate-800">Submit Data</h1>
                <div>
                    <label htmlFor="name" className="block text-slate-800 mb-2">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded-md py-2 px-4 mb-4 bg-blue-50 text-slate-900" />

                    <label htmlFor="height" className="block text-slate-800 mb-2">Height (cm):</label>
                    <input type="number" id="height" name="height" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full border rounded-md py-2 px-4 mb-4 bg-blue-50 text-slate-800" required />

                    <div className="mb-4">
                        <span className="block mb-2 text-slate-800">Water Level (choose one):</span>
                        <div className="flex justify-evenly">
                            <label htmlFor="waterlevel1" className={`inline-block border-2 ${activeOption === 1 ? "border-blue-800" : "border-transparent hover:border-blue-100 "}`} onClick={handleOption(0.2, 1)}>
                                <Image src="/img/crowdsource/1.svg" width={100} height={100} alt="Low water level" />
                            </label>

                            <label htmlFor="waterlevel2" className={`inline-block border-2 ${activeOption === 2 ? "border-blue-800" : "border-transparent hover:border-blue-100 "}`} onClick={handleOption(0.4, 2)}>
                                <Image src="/img/crowdsource/2.svg" width={100} height={100} alt="Medium water level" />
                            </label>

                            <label htmlFor="waterlevel3" className={`inline-block border-2 ${activeOption === 3 ? "border-blue-800" : "border-transparent hover:border-blue-100 "}`} onClick={handleOption(0.6, 3)}>
                                <Image src="/img/crowdsource/3.svg" width={100} height={100} alt="High water level" />
                            </label>                            
                            
                            <label htmlFor="waterlevel3" className={`inline-block border-2 ${activeOption === 4 ? "border-blue-800" : "border-transparent hover:border-blue-100 "}`} onClick={handleOption(0.9, 4)}>
                                <Image src="/img/crowdsource/3.svg" width={100} height={100} alt="High water level" />
                            </label>
                        </div>
                    </div>

                    <label htmlFor="location" className="block text-slate-800 mb-2">Location:</label>
                    <input type="text" id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full border rounded-md py-2 px-4 mb-4 bg-blue-50 text-slate-800" />

                    <button onClick={handleSubmit} className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
                </div>
                <div className="mt-4 text-slate-800">{message}</div>
            </div>
        </div>
    );
}

export default Form;
