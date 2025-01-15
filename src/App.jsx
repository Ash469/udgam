import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import './styles/fonts.css';
import AppRoutes from './Routes';
import { VAKChat } from "vakchat";
import "vakchat/dist/index.css";


function App() {


  return (
    <div className="App">
      <VAKChat 
            VAKFlowID="Mo2RDRGeqJUiyNXyYOLO" 
            btnText="Udgam AI"
            theme="light"
            shade="indigo"
            introMessage="Hello, I'm Udgam  AI assistant, here to help! How can I assist you today?"
            defaultPopupSize="small"
            emailRequired={false} 
            contactRequired={true}
            nameRequired={true} 
        />
       <AppRoutes />
    </div>
  );
}

export default App;

