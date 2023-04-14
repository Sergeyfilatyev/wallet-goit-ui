// import { useSelector } from "react-redux";
// import { selectAuth } from "../redux/auth/auth-selectors";
import { Verify } from "../components/Verify/Verify";

const VerifyPage = () => { 

//     const user = useSelector(selectAuth)


//     const fetchResendEmail = () => {
//         console.log(user)
//   axios.post('/verify', {
//     email,
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }
    return (
       <Verify/>
    )
}

export default VerifyPage