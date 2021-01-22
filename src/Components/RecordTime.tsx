import React, { useState } from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { ChoiceGroup, IChoiceGroupOption} from 'office-ui-fabric-react/lib/ChoiceGroup';
import axios from 'axios';
import "./RecordTime.css"



function RecordTime() {
    const[total, setTotal] = useState()
    const [data, setData] = useState({
        descrpition: "",
        file: "",
        time: "",
        rate: "",
        revenue: "",
        performer: "",
        date: "",
        key: "",
      });
      console.log(data)

      const postData = (e) => {
        e.preventDefault();
        axios
          .post(`http://localhost:3002/add`,data)
          .catch((err) => console.log(err))
      }
      const options: IChoiceGroupOption[] = [
        { key: 'A', text: 'Option A' },
        { key: 'B', text: 'Option B' },
        { key: 'D', text: 'Option D' },
      ];   

    //   const revenue =() => {
    //      const rate=parseInt(data.rate)
    //      const time=parseInt(data.time)
    //     let totalVal=(rate*time)

       //   setTotal(totalVal)
    //   }

    
    function _onChange(ev: React.FormEvent<HTMLInputElement>, option: IChoiceGroupOption): void {
    setData({...data, key : option.key});
      }
 
     
    return(
    <div className="main">
   <form onSubmit={postData}>
     <div className="f1">
   <TextField placeholder="descrpition" type="text" id="descrpition" value={data.descrpition} 
   onChange={(e, value) => setData({ ...data, descrpition: value })}></TextField>
    <div className="f1a">
      <TextField placeholder="file" type="text" id="file" value={data.file} 
   onChange={(e, value) => setData({ ...data, file: value })}></TextField>
   </div>
   </div>
   <div className="f2">
    <div style={{paddingTop:"120px"}}>
   <form onSubmit={postData}>
   <TextField placeholder="descrpition" type="text" id="descrpition" value={data.descrpition} 
   onChange={(e, value) => setData({ ...data, descrpition: value })}></TextField>
      <TextField placeholder="file" type="text" id="file" value={data.file} 
   onChange={(e, value) => setData({ ...data, file: value })}></TextField>
      <TextField placeholder="time" type="text" id="time" value={data.time} 
   onChange={(e, value) => setData({ ...data, time: value })}></TextField>
         <TextField placeholder="rate" type="number" id="rate" value={data.rate} 
   onChange={(e, value) => setData({ ...data, rate: value })}></TextField>
           <TextField placeholder="revenue" type="number" id="revenue" readOnly value={data.revenue} 
   onChange={(e, value) => setData({ ...data, revenue: value })}></TextField>
   </div>
         <TextField placeholder="performer" type="text" id="performer" value={data.performer} 
   onChange={(e, value) => setData({ ...data, performer: value })}></TextField>
              <TextField placeholder="dd-mm-yyyy" type="date" id="date" value={data.date} 
   onChange={(e, value) => setData({ ...data, date: value })}></TextField>
     <div className="f3">
     <ChoiceGroup defaultSelectedKey="B" options={options} label="Pick one" required={true}
     onChange={_onChange}
    />; 
     {console.log(options)}
{/* {*{onChange={(e, value) => setData({ ...data, value)} } *} */}

 </div>
<div className="f4">
   <button type="submit">save</button>
</div>


   <button type="submit">save</button>
   </form>
   


    </div>
    )

}
  export default RecordTime;
  