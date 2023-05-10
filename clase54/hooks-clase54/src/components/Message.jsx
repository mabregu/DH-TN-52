import { useEffect } from "react"

export const Message = () => {
    useEffect(() => {
        console.log("componente message montado");
        
        return () => {
            console.log("componente message desmontado");
        }
    }, [])
    
    return (
        <>
            <h3>HOLA GENTE</h3>
        </>
    )
}
