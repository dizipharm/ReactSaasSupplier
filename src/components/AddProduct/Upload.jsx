import React from 'react'
import { saveAs } from 'file-saver';
import Show from './Show';
import { Button } from 'react-bootstrap';

const Upload = () => {

    const handleClick = () => {
        const csvData = "Material Specifications,Structural element,Element Group,Qunatity,GIA[m2]";
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
        saveAs(blob, 'data.csv');
      };

  return (
    <div >
<h3>Upload Products</h3>
    <p>Download the file and complete it and upload</p>
    <button className='btn w-fit ' onClick={handleClick}>Click here to download the file</button>
    <div style={{ display:"flex", flexFlow:"column", gap:"5px"}}>
        

    <Show/>

    <Button style={{ width:"100px"}}>
      Upload   
    </Button>
    </div>
    </div>
  )
}

export default Upload
