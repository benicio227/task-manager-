import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_PAGE};

    > div {
        width: 800px;
        max-height: 500px;
        padding: 7px;
        overflow-y: auto;
        border-radius: 7px;
        background-color: ${({theme}) => theme.COLORS.COLOR_GRAY};

        > div {
            display: flex;
            align-items: center;
            width: 100%;
            height: 70px;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 60px;
            padding-bottom: 60px;
            border-radius: 7px;
            gap: 10px;
            background-color: orange;


            > input {
                width: 100%;
                height: 30px;
                border-radius: 7px;
                border: none;
                margin-left: 10px;
                padding: 20px;
                background-color: ${({theme}) => theme.COLORS.BACKGROUND_FORM};
                color: ${({theme}) => theme.COLORS.COLOR_WHITE};
                font-weight: 600;
                font-size: 18px;
            }

            > button {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 130px;
                height: 40px;
                border-radius: 7px;
                border: none;
                font-weight: 600;
                margin-right: 10px;
                padding: 13px;
                cursor: pointer;
                transition: 0.5s;
                background-color: ${({theme}) => theme.COLORS.COLOR_GRAY};
                color: ${({theme}) => theme.COLORS.BACKGROUND_FORM};
            }

            > button:hover {
                background-color: blue;
                color: white;
            }
        }
    }
`;

export const TaskDone = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    margin-top: 5px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 60px;
    padding-bottom: 60px;
    border-radius: 7px;
    background-color: orange;

    >  .task-done-input {
        width: 100%;
        height: 30px;
        border-radius: 7px;
        border: none;
        margin-left: 10px;
        letter-spacing: 1px;
        padding: 20px;
        background: none;
        color: ${({theme}) => theme.COLORS.BACKGROUND_FORM};
        font-weight: 600;
        font-size: 20px;
    }
   
    .completed {
        text-decoration: line-through red; /* Adicione a linha riscada para indicar tarefas concluídas */
    }
   

    > .buttons-task {
       width: 250px;
       height: 30px;
       display: flex;
       align-items: center;
       justify-content: center;
       padding: 20px;
       gap: 5px;

       
        >  button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 130px;
            height: 40px;
            border-radius: 7px;
            border: none;
            font-weight: 600;
            margin-right: 10px;
            padding: 13px;
            cursor: pointer;
            transition: 0.5s;
            color: ${({theme}) => theme.COLORS.BACKGROUND_FORM};
        }

        > button:hover {  
            background-color: ${({theme}) => theme.COLORS.COLOR_GRAY};
        }

        .btn-checked {
            background-color: ${({theme}) => theme.COLORS.COLOR_GRAY};
        }

        .btn-checked:hover {
            background-color: green;
            color: white;
        }

        .btn-delete {
            background-color: ${({theme}) => theme.COLORS.COLOR_GRAY};
        }

        .btn-delete:hover {
            background-color: red;
            color: white;
        }
    }
`;
