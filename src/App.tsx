import HeaderSimple from './components/Extra/Header'
import Form from './components/Form/Form'
import { useState } from 'react'
import { SegmentedControl } from '@mantine/core';
import MongoTable from './components/Table/MongoTable/MongoTable';
import { Toaster } from 'react-hot-toast';


function App() {
  const [value, setValue] = useState('Form');
  return (
    <>
      <Toaster position='top-right' />
      <HeaderSimple />
      <div style={{display: "flex", justifyContent:"center", alignItems: "center", width:"100%"}}>
        <SegmentedControl
            value={value}
            onChange={setValue}
            data={['Form','Table']}
            style={{ width: "200px"}}
        />
      </div>
      {value === 'Form' ? <Form /> : <MongoTable />}
    </>
  )
}

export default App
