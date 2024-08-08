import React from 'react';

const teamMembers = [
  { name: 'John Markson', position: 'Manager', imgSrc: '/team1.jpg' },
  { name: 'Jane Smith', position: 'Farmer', imgSrc: '/team2.jpg' },
  { name: 'Sam Willy', position: 'Technician', imgSrc: '/team3.jpg' },
  { name: 'Ted Holland', position: 'Veterinarian', imgSrc: '/team4.jpg' },
];

const Team = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-800">
      
    <div className="flex-col flexitems-center justify-center bg-gray-50 shadow-lg max-w-md w-full ">
     
        <h2 className="text-2xl font-bold text-center mb-4">Our Team</h2>
        <div className="flex justify-center flexitems-center rounded-lg shadow-lg max-w-md w-full ">
          <div className="flex flex-wrap justify-center  ">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center mx-4 flexitems-center rounded-lg max-w-40 w-75 mb-8">
                <img src={member.imgSrc} alt={member.name} className="w-24 h-24 rounded-full mx-auto " />
                <h3 className="text-xl font-bold mt-2 ">{member.position}</h3>
                <p>{member.name}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
     
 
  );
};

export default Team;
