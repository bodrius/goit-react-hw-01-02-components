import React from 'react'
import Statistics from './statistics/Statistics'
import statisticalData from '../../src/components/statistics/statistical-data.json'

const App = () => {
    return (
        <Statistics title="Upload stats" stats={statisticalData} />
    );
}

export default App;