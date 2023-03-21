import {LoadingButton } from "@mui/lab"
import{Alert, Box, Button,  Stack,  TextField} from "@mui/material"
import {useFormik} from "formik"
import {useState} from "react"
import { useDispatch } from "react-redux"
import {toast} from  "react-toastify"
import * as Yup from "yup"
import userApi from "../../api/modules/user.api"
import { setAuthModalOpen } from "../../redux/features/authModalSlice"
import{setUser} from "../../redux/features/userSlice"



const SigninForm  =({ swithAuthState}) =>{
    const dispatch = useDispatch()


    const  [isLoginRequest, setIsLoginRequest] =useState(false)
    const [errorMessage, setErrorMessage] = useState()

    const signinForm = useFormik({
        initiaValues: {
            password: "",
            username: ""
        },
        ValidationSchema: Yup.object({
            username: Yup.string()
            .min(8, "username minimum 8 characters")
            .required("username is required"),
            password: Yup.string()
            .min(8, "username minimum 8 characters")
            .required("password is required")
        }),
        onsubmit: async values => {
            setErrorMessage(undefined)
            setIsLoginRequest(true)
            const {response, err} = await userApi.signin(values)
            setIsLoginRequest(false)
            
            if( response){
                signinForm.resetForm();
                dispatch(setUser(response));
                dispatch(setAuthModalOpen(false));
                toast.success("Sign in success");

            }
            if (err) setErrorMessage(err.message);
        }

    });

    return(
        <Box component = "form" onsubmit={signinForm.handleSubmit}>
        <Stack spacing ={3}>
        <TextField
            type = "text"
            placeholder="username"
            name="username"
            fullWidth
            values={signinForm.values.username}
            onChange={signinForm.handlerChange}
            color="succes"
            error={signinForm.touched.username && signinForm.error.username !== undefined}
            helperText ={signinForm.touched.username && signinForm.error.username}


        />
         <TextField
            type = "password"
            placeholder="password"
            name="password"
            fullWidth
            values={signinForm.values.password}
            onChange={signinForm.handlerChange}
            color="succes"
            error={signinForm.touched.password && signinForm.error.password !== undefined}
            helperText ={signinForm.touched.password && signinForm.error.password}
            

        />

        </Stack>
        <LoadingButton
        type="submit"
        fullWidth
        size="large"
        variant ="contained"
        sx={{ marginTop: 4}}
        loading ={isLoginRequest}
        
        
        >
            sign in
        

        </LoadingButton>
        <Button
            fullWidth
            sx={{ marginTop: 1}}
            onclick={() => swithAuthState()}
        >
            sign up
        </Button>
        {
            errorMessage && (
                <Box sx ={{marginTop:2}}>
                <Alert serverity="error" variant="outlined">{errorMessage}</Alert>

                </Box>
            )}
       
        </Box>
    );

};

export default SigninForm;