
import axios from 'axios'
import  toast  from 'react-hot-toast'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Logout (props) {
    const navigate= useNavigate()
    async function logout(){
        props.setIsLogged(false)
        props.setFetching(true)
        await axios.put(`https://ironrest.herokuapp.com/regAtivAPI/${props.idUser}`,{"loged":false})
        const tempo = (ms)=>{return new Promise(resolve =>setTimeout(resolve,ms))}
        await tempo(5000)
        props.setFetching(false)
        toast.success('Logout realizado com sucesso!')
        return
    }
    useEffect(()=>{
        logout();
        navigate('/home')
    },[])
    return (
        <div>
            
        </div>
    );
};


export default Logout;