import {Container, TaskDone} from './styles';
import { useState } from 'react';

export function AppTask(){
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([]);

    function targetTask(e){
        setInput(e.target.value);
    }
    
    function createNewTask(){
        if (input.trim() !== '') {
            setTasks(prevTasks => [...prevTasks, {text: input, done: false}]);
            setInput('');
        }
    }

    function checkedTask(index) {
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks]; // Cria uma cópia da lista de tarefas original
            updatedTasks[index] = { ...updatedTasks[index], done: !updatedTasks[index].done }; // Modifica apenas a tarefa específica
            return updatedTasks; // Retorna a lista de tarefas atualizada
        });
    }

    function deleteTask(index){
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks];  /*Cria uma cópia da lista de tarefas original (prevTasks) usando o operador spread .... Isso é feito para garantir que estamos trabalhando com uma cópia do estado anterior e não diretamente com ele, o que é uma boa prática em React*/
            /* Neste ponto, updatedTasks é uma cópia da lista de tarefas original, o que significa que qualquer modificação que você faça em updatedTasks não afetará diretamente o estado tasks.*/
            updatedTasks.splice(index, 1);
            return updatedTasks; /*Por fim, você retorna updatedTasks usando return updatedTasks;. Esta lista atualizada é então definida como o novo estado tasks usando setTasks. Isso faz com que o React atualize o estado tasks com a nova lista de tarefas, que agora não inclui mais a tarefa que você removeu.*/
        })
    }

    return (
        <Container>
            <div>
                <div>
                    <input type="text" placeholder='write a task...' value={input} onChange={targetTask}/>
                    <button onClick={createNewTask}>Add Task</button>
                </div>
    
                {tasks.map((task, index) =>(    /*a função map é usada para transformar cada elemento do array tasks em um elemento <TaskDone>, que é então renderizado na interface do usuário. Isso permite que cada tarefa na lista seja representada visualmente na interface do usuário como um componente <TaskDone>.*/
                    <TaskDone key={index}>   
                        <input
                        type="text"
                        className={task.done ? 'task-done-input completed' : 'task-done-input'} 
                        value={task.text}
                        readOnly
                        />
                        
                        <div className='buttons-task'>
                            <button className='btn-checked' onClick={() => checkedTask(index)}>Checked</button> 
                            <button className='btn-delete' onClick={() => deleteTask(index)}>Delete</button>
                        </div>
                    </TaskDone>
                ))}
            </div>
        </Container>
    )
    /*quando você deleta uma tarefa do array tasks, o elemento <TaskDone> associado a essa tarefa também é automaticamente removido da interface do usuário durante a próxima renderização do componente. Isso é parte do comportamento padrão do React em manter a interface do usuário sincronizada com o estado da aplicação.*/
    /* A propriedade key é essencial para o React identificar de forma única cada elemento na lista renderizada. Quando você utiliza key={index}, está associando cada elemento <TaskDone> a um índice específico no array tasks. Quando uma tarefa é removida do array tasks, o React percebe que o elemento associado a essa chave não está mais presente e remove-o da interface do usuário durante a renderização subsequente.*/

}

/*Ao passar o index para as funções checkedTask e deleteTask, você está informando qual é o índice da tarefa no array tasks que está sendo manipulada. Isso permite que as funções acessem a tarefa correta no array tasks e realizem a operação desejada (marcar como concluída ou excluir). Se você não passar o index, as funções não saberão qual tarefa manipular.*/