// App.js
import React from 'react';

const App = () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    );
};

export default App;


