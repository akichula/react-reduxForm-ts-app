import React from 'react';
import './App.css';
import ContactForm from "./input";

function App() {
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    async function showResults(values: any) {
        await sleep(500);
        console.log(values)
    }
    return (
        <div style={{padding: 15}}>
            <h2>Simple Form</h2>
            <ContactForm onSubmit={showResults}/>
        </div>
    );
}

export default App;
