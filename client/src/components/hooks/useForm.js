import { useState } from "react";

export default function useForm(callback, initialValues, ) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    
    const formAction = (event) => {
       
        if (event && typeof event.preventDefault === 'function') {
            event.preventDefault(); 
        }
          callback(values); 
    }

    const register = (fieldName) => {
        return {
            name: fieldName,
            onChange: changeHandler,
            value: values[fieldName],
        }
    }

    return {
        values,
        setValues,
        register,
        changeHandler,
        formAction,
    }
}