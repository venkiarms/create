import logo from './logo.svg';
import './App.css';
import {useFormik} from 'formik';
import * as yup from 'yup';
import { Any } from './name';

// const validate = values =>{
//   var errors = {}
//   if(!values.name){
//     errors.name = "Name is required";
//   }
//   else if (values.name.length > 6){
//     errors.name = "max 6 chara only allowed";
//   }
//   else if (values.name.length < 2){
//     errors.name = "min 2 chara only allowed";
//   }
//   return errors;
// }

function App() {
  const formik = useFormik({
    initialValues:{
      name:'',
      email:''
    },
    validationSchema:yup.object({
      name:yup.string()
      .required("Name Is must")
      .max(8,"Maximum 8 char must")
      .min(2, "Min 2 chare must"),
      email:yup.string()
      .required("Email is must")
      .email()

    }),
    onSubmit:(UserInputData)=>{
      console.log(UserInputData);
    }

  })
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Any />
      <form onSubmit={formik.handleSubmit}>
        <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange}/><br/><br/>
        {formik.errors.name}<br/><br/>
        <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange}/><br/><br/>
        {formik.errors.email}<br/><br/>
        <button style={{backgroundColor: 'green'}}>Click</button>

      </form>
      
    </div>
  );
}

export default App;
