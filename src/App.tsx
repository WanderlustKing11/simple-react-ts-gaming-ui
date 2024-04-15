import { Button } from './components/Button';
import { Alert } from './components/Alert';
import { useState } from 'react';

function App() {
  let [liveAlert, setLiveAlert] = useState(false);

  return (
    <div className='text-center'>
      <div className='container mt-4'></div>
      <Button color='primary' onClick={() => setLiveAlert(!liveAlert)}>
        Click Me
      </Button>
      <div className='container mb-4'></div>
      {liveAlert && (
        <Alert color='success' onClose={() => setLiveAlert(false)}>
          Success! You triggered an alert!
        </Alert>
      )}
    </div>
  );
}

export default App;
