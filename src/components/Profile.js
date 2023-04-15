import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const UserProfile = () => {
    const isRegistered = false;
    //const navigate = useNavigate();


    useEffect(() => {
        if(isRegistered){
            alert("please log in")
            //navigate('/Login')
        }
    });


    return(
      <h1>Hello</h1>
    )
};

export default UserProfile;