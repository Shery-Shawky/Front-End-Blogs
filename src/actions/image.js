import {IMAGE_USER, AUTH_ERROR} from './types'

export const Upload_img=(userid,img_upload)=>async dispatch=>{

    console.log(img_upload);

if(img_upload){
    let img = img_upload.target.files[0];
    console.log(img);
  
     const formData = new FormData();
     formData.append('image', img);
     console.log(formData);

    try {
    
        const res=await axios.post(`/api/upload/user/${userid}`,formData);
    
    
               dispatch({
            type:IMAGE_USER,
            payload:res.data
        });

    } catch (err) {
   
        dispatch({
            type:AUTH_ERROR,
            payload:{msg:err}
    
        });
        
    }
       

}

}