const ProfileCard = () => {
  return (
    <>
      <div className="w-full rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full object-cover"
          src="https://avatars.githubusercontent.com/u/55938330?v=4/400x200"
          alt="Profile Picture"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Rachit Khare</div>
          <p className="text-gray-700 text-base">
            A full-stack web developer with 2 years and 7 months of experience
            in full-stack development using the MERN Stack.
            <br />
            Skills: HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js,
            Express.js, ReactJS, mongoDB
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #full-stack
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #developer
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #MERN
          </span>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
