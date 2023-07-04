import { useState } from "react"

const Crud = () =>{


    const [userDetails, setUserDetails] = useState({UserName:'', Age:0, Mobile:'', City:''});
    const [error, setError] = useState({UserName:'', Age:'', Mobile:'', City:''});

    function handleUserName(e){
        setUserDetails({
            UserName: e.target.value,
            Age: userDetails.Age,
            Mobile: userDetails.Mobile,
            City: userDetails.City
        })
    }
    function handleAge(e){
        setUserDetails({
            UserName: userDetails.UserName,
            Age: parseInt(e.target.value),
            Mobile: userDetails.Mobile,
            City : userDetails.City
        })
    }
    function handleMobile(e){
        setUserDetails({
            UserName: userDetails.UserName,
            Age: userDetails.Age,
            Mobile: e.target.value,
            City: userDetails.City
        })
    }
    function handleCity(e){
        setUserDetails({
            UserName: userDetails.UserName,
            Age: userDetails.Age,
            Mobile: userDetails.Mobile,
            City: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        //alert(JSON.stringify(userDetails));
        if(userDetails.UserName==""){
            setError({
                UserName: 'User Name Required',
            })
        }
        if(userDetails.City=="-1"){
            setError({
                City: 'Please Select your city'
            })
        } else {
            setError({
                City: ''
            })
        }
    }

    function VerifyUserName(){
        if(userDetails.UserName==""){
            setError({
                UserName: 'User Name Required'
            })
        } else {
           if(userDetails.UserName.length<4){
                setError({
                    UserName : 'Name too short min 4 chars'
                })
           } else {
                setError({
                    UserName: ''
                })
           }
        }
    }

    return(
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <h3>Register User</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onKeyUp={VerifyUserName} onChange={handleUserName} /></dd>
                    <dd className="text-danger">{error.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" onChange={handleAge}/></dd>
                    <dd className="text-danger">{error.Age}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" onChange={handleMobile}/></dd>
                    <dd className="text-danger">{error.Mobile}</dd>
                    <dt>City</dt>
                    <dd>
                        <select onChange={handleCity}>
                            <option value="-1">Choose City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyd">Hyd</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{error.City}</dd>
                </dl>
                <button className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}

export { Crud }