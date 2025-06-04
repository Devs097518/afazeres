import '/src/estilos/Menu.css'
import {useState} from 'react'
export function Container(){

    const [tasks , setTasks] = useState<string[]>([ ]);
    const [newTask , setNewTask] = useState<string>("");
    
    function atualizarEntrada(event:any){
        setNewTask(event.target.value)
    }

    function adicionarNota (){
        if(newTask.trim() !== ""){
            setTasks(t => [...t,newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index:number){
        const updatedTasks = tasks.filter((_,i) => i !== index );
        setTasks(updatedTasks)
    }


    return(
        <>
            <div className='container'>
                <div className='caixa'>
                    <p className='titulo'>Bem Vindo</p>
                    <input
                        type="text" 
                        onChange={atualizarEntrada}
                    /> 
                    <button
                        onClick={adicionarNota}
                    >criar nota</button>
                </div>
                
                <ol>
                    {tasks.map((task , index) => 
                        <div className='caixas' key={index}>
                            <button onClick={ ()=> deleteTask(index)}>X</button>
                            <p>{task}</p>
                        </div>
                    )}
                </ol>

                
            </div>
        </>
    )
    }

