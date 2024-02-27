const Description = () => {
  return (
    <>
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">
          DataNeuron Assessment Web App
        </h1>
        <p className="mb-6">
          This web app is created for the assessment provided by the DataNeuron
          team. The requirements are as follows:
        </p>

        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Requirements:</h2>
          <ol className="list-decimal ml-6">
            <li>Create 3 resizable components in the format provided.</li>
            <li>The said components should be made in ReactJS.</li>
            <li>
              The other components should resize themselves accordingly when one
              component is stretched or contracted.
            </li>
            <li>
              Create a REST API in Node for adding data to the components
              created in React.
            </li>
            <li>Create 3 buttons: ADD, UPDATE, and COUNT.</li>
            <li>Add Data persistence using any database of your choice.</li>
          </ol>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Technologies Used:</h2>
          <ul className="list-disc ml-6">
            <li>ReactJS for creating resizable components.</li>
            <li>Node.js for creating the REST API.</li>
            <li>Database: mongoDB</li>
            <li>
              HTML, CSS (Tailwind CSS), and ReactJS for web app development.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Functionality Overview:</h2>
          <p>This web app allows users to:</p>
          <ul className="list-disc ml-6">
            <li>
              Resize 3 components and see others adjust accordingly.(Bottom
              right corner for resizing)
            </li>
            <li>
              Add books to the component below through the REST API.("+" button)
            </li>
            <li>Update books in the component below through the REST API.</li>
            <li>Delete books from the component below through the REST API.</li>
            <li>Count the number of times the data was added and updated.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Description;
