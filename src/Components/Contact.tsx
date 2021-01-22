import React, { useState } from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { ChoiceGroup, IChoiceGroupOption} from 'office-ui-fabric-react/lib/ChoiceGroup';
import axios from 'axios';


function Contact() {
    const[total, setTotal] = useState()
    const [data, setData] = useState({
        contactname: "",
        key: "",
        PhoneNum: ""
      });
      console.log(data)

      const postData = (e) => {
        e.preventDefault();
        axios
          .post(`http://localhost:3002/add`,data)
          .catch((err) => console.log(err))
      }
      const options: IChoiceGroupOption[] = [
        { key: 'A', text: 'Co-Worker' },
        { key: 'B', text: 'Client' },
      ];   


    
    function _onChange(ev: React.FormEvent<HTMLInputElement>, option: IChoiceGroupOption): void {
    setData({...data, key : option.key});
      }
 
     
    return(
    <div style={{paddingTop:"120px"}}>
      <h3 style={{textAlign:'center'}}> Contact Book</h3>
   <form style={{width:'40%', marginLeft:"30%"}} onSubmit={postData}>
   <TextField style={{textAlign:'center'}} placeholder="Contact Name" type="text" id="contactname" value={data.contactname} 
   onChange={(e, value) => setData({ ...data, contactname: value })}></TextField>
      <br></br>
      <TextField style={{textAlign:'center'}} placeholder="Phone Number" type="text" id="PhoneNum" value={data.PhoneNum} 
   onChange={(e, value) => setData({ ...data, PhoneNum: value })}></TextField>
     <ChoiceGroup  style={{textAlign:'center', display: 'flex', justifyContent:'center'}} defaultSelectedKey="B" options={options} label="Pick one" required={true}
     onChange={_onChange}
    />
     {console.log(options)}


   <button style={{marginLeft:'40%', marginTop:'1%'}} type="submit">save</button>
   </form>
   


    </div>
    )

}
  export default Contact;