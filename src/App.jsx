import { useState } from 'react';
import Details from './Details';
const App = () => {
   const [details] = useState([
      {
         title: 'npm start',
         content:
            'Runs the app in the development mode. Open http://localhost:3000 to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.',
      },
      {
         title: 'npm test',
         content:
            'Launches the test runner in the interactive watch mode. See the section about running tests for more information.',
      },
      {
         title: 'npm run build',
         content:
            'Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.',
      },
      {
         title: 'npm run eject',
         content:
            'Note: this is a one-way operation. Once you eject, you can not go back! If you are not satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.',
      },
   ]);
   return (
      <>
         <h1>Details component with jquery</h1>
         <h4>
            <a href='https://github.com/hayitmurod707/details'>Github</a>
         </h4>
         <Details details={details} />
      </>
   );
};
export default App;
