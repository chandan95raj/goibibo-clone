const solid = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-violet-500 text-white',
    danger: 'bg-red-500 text-white',
    error: 'bg-pink-500 text-white',
    warning: 'bg-amber-500 text-white',
    dark: 'bg-slate-800 text-white',
    light: 'bg-gray-300 text-slate-500'
}

const outline = {
    primary: 'border border-blue-500 text-blue-500',
    secondary: 'border border-violet-500 text-violet-500',
    danger: 'border border-red-500',
    error: 'border border-pink-500',
    warning: 'border border-amber-500',
    dark: 'border border-slate-800',
    light: 'border border-gray-300'
}

const Button = ({variant="solid",theme=null,children,...rest})=>(
    <>
        { variant === "solid" &&     
            <button 
            className={`px-4 py-2 rounded shadow ${solid[theme]}`}
            {...rest}
            >
                {children}
            </button>
        }

        { variant === "outline" &&     
            <button 
            className={`px-4 py-2 rounded shadow ${outline[theme]}`}
            {...rest}
            >
                {children}
            </button>
        }
            
    </>
)

export default Button;