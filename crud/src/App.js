import { useState } from 'react';
import './App.css';
import Users from "./components/Users";

function App() {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, status) => {
    setNotification({
      'message': message,
      'status': status
    })
  }



  let htmlNotification = null
  if (notification != null) {
    htmlNotification = (
      <div className={notification.status == "success" ? "alert alert-success" : "alert alert-danger"} role="alert">
        {notification.message}
      </div>
    );
  }

  return (
    <div className="App">
      <div className="container mt-5">
        {htmlNotification}
      </div>

      <Users showMessage={showNotification} />
    </div>
  );
}

export default App;
