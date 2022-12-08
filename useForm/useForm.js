import { useState } from "react"


export const useForm = (initialForm = {}) => {

    const [form, setform] = useState(initialForm);


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setform(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const onResetForm = () => {
        setform(initialForm)
    }

    return {
        ///...form,
        form,
        onInputChange,
        onResetForm
    }
}
