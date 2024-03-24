# Task-Manager - (Gerenciador de tarefas)
**This is a task manager project developed with React. It allows users to create, mark as completed, and delete tasks from the list.**
(Este é um projeto de um gerenciador de tarefas desenvolvido com React. Ele permite que os usuários criem, marque como concluido e excluam tarefas da lista.)

## Functionality (Funcionalidades)
- **Add a new task** (Adicionar nova tarefa)
- **Mark a task as completed** (Marcar uma tarefa como concluída)
- **Remove a task from the list** (Remover uma tarefa da lista)

## Technologies used (Tecnologias usadas)
- [**React**](https://reactjs.org/) (v18.2.0): React is a Javascript library for building user interfaces.
- [React DOM](https://reactjs.org/docs/react-dom.html) (v18.2.0): A package that provides DOM-specific methods for React.
- [React Icons](https://react-icons.github.io/react-icons/) (v5.0.1): An icon library for React with thousands of icons available.
- [Styled Components](https://styled-components.com/) (v6.1.8): A library for styling React components with CSS syntax inside JavaScript files.
- **HTML/CSS**
- **Javascript**

**Description of the purpose of each technology used in the project**:
- **React**: Used as the main library for developing the project's user interface. It offers an efficient way to build reusable and interactive components.
(Utilizada como biblioteca principal para desenvolvimento da interface de usuário do projeto. Ele oferece uma maneira eficiente de construir componentes reutilizáveis e interativos)
- **React DOM**: Responsible for manipulating the DOM and rendering the React components on the web page.
(Responsável por manipular o DOM e renderizar os componentes React na página web)
- **React Icons**: Used to add icons to the user interface in an easy and convenient way, making it more visually attractive and understandable.
(Usado para adicionar ícones à interface do usuário de maneira fácil e conveniente, tornando-a visualmente mais atraente e compreensível)
- **Styled Components**: Used to style React components in a modular and component-based way, allowing better organization and reuse of CSS styles in the project.
(Utilizado para estilizar componentes React de forma modular e baseada em componentes, permitindo melhor organização e reutilização de estilos CSS no projeto)


## Pre-requisites (Pré-requisitos)
- **Node.js installed** (Node.js instalado)
- **npm (or yarn) installed** (npm ou yarn instalado)

## Installation (Instalação)
Note: This project uses `styled-components` for styling

(Nota: Esse projeto usa `styled-components` para estilizar)
1. **Clone this repository on your machine: `git clone git@github.com:benicio227/task-manager-.git`** (Clone esse repositório em sua máquina)
2. **Navigate to the project directory**: `cd project-name` (Navegue até o diretório do projeto)
3. **Install the dependencies**: `npm install` or `yarn install` (Instale as dependências)

## How to use (Como usar)
1. **Start the development server**: `npm start` or `yarn start` (Inicie o servidor de desenvolvimento)
2. **Open your browser and access**: `http://localhost:3000` (Abra seu navegador e acesse)

### Code Explanation (Explicação do código)
Below we are defining a function called `createNewTask()`. This function is responsible for adding a new task to the task list when the user clicks the "Add task" button.

(Abaixo estamos definindo uma função chamada `createNewTask()`. Esta função é responsável por adicionar uma nova tarefa à lista de tarefas quando o usuário clicar no botão "Adicionar tarefa".)
```javascript
function createNewTask() {
    if (input.trim() !== '') {
        setTasks(prevTasks => [...prevTasks, {text: input, done: false}]);
        setInput('');
    }
}
```
We also have the `checkedTask(index)` function. This function is responsible for marking a task as completed or undoing this marking when the user interacts with the corresponding task component.

(Temos também a função `checkedTask(index)`. Esta função é responsável por marcar uma tarefa como concluída ou desfazer essa marcação quando o usuário interage com o componente de tarefa correspondente)
```javascript
function checkedTask(index) {
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks]; 
            updatedTasks[index] = { ...updatedTasks[index], done: !updatedTasks[index].done };
            return updatedTasks;
        });
    }
```
Finally we have the `deleteTask(index)` function. This function will be called when the user clicks the "Delete" button, deleting the task with the index corresponding to that task.

(Por fim temos a função `deleteTask(index)`. Essa função será chamada quando o usuário clicar no botão "Delete", apagando a tarefa com o index correspondente àquela tarefa.)
```javascript
    function deleteTask(index){
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks];
            updatedTasks.splice(index, 1);
            return updatedTasks; 
        })
    }
```

## Contributions (Contribuições)
**This project is open to contributions. If you want to contribute to this project, follow these steps:**

(Este projeto está aberto à contribuições. Se você deseja contribuir para este projeto, siga estes passos:)
1. **Fork the repository** (Fork do repositório)
2. **Create a branch for your feature: `git checkout -b my-feature`** (Crie uma ramificação para sua feature)
3. **Commit your changes: `git commit -m 'Add new feature'`** (Confirme suas alterações)
4. **Upload to remote repository: `git push origin minha-feature`** (Envie para o repositório remoto)
5. **Open a pull request** (Abra uma solicitação pull)

## License

This project is licensed under the MIT License - see the <a href="LICENSE.md">LICENSE.md</a> file for more details.

(Este projeto está licenciado sob a licença MIT - consulte o arquivo <a href="LICENSE.md">LICENSE.md</a> para obter mais detalhes.)
