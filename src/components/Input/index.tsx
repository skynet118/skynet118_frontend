
export const InputText = (
                {idInput, name, message, label, placeholder, type, onChange, defaultValue}:
                {idInput:string, name:string, message:string, label:string, placeholder:string, type:string, onChange: (value:string) => void, defaultValue?:string}
                        ) => 
{
    const handleChange = (event:any) => {
        console.log(event.target.value)
    }
    return(
        <div className="my-[20px]">
            <label className="pl-2" htmlFor={name}>{label}</label>
            <div className="h-[45px] rounded border-4 border-[#6A34FF] ">
                <input 
                        onChange={handleChange}
                        className="w-full h-full border-0 pl-2 focus:outline-none"
                        id={idInput}
                        type={type}
                        placeholder={placeholder} />
                <span className="hidden">{message}</span>
            </div>
        </div>
    )
}



export const InputCheckBox = (
                {idInput, name, message, label, placeholder, type, onChange, defaultValue}:
                {idInput:string, name:string, message:string, label:string, placeholder:string, type:string, onChange: (value:string) => void, defaultValue?:string}
                        ) => 
{
    const handleChange = (event:any) => {
        console.log(event.target.value)
    }
    return(
        <div>
            <label className="pl-2" htmlFor={name}>{label}</label>
            <div className="h-[45px] rounded border-4 border-[#6A34FF] ">
                <input 
                        onChange={handleChange}
                        className="w-full h-full border-0 pl-2 focus:outline-none"
                        id={idInput}
                        type={type}
                        placeholder={placeholder} />
                <span className="hidden">{message}</span>
            </div>
        </div>
    )
}
