import axios from "axios";

export const postTask = async(name, description, date) => {
    return new Promise((resolve,reject)=>{
        axios({
            method: 'POST',
            url: 'https://my-json-server.typicode.com/felipeZapata196/lista-tareas/tasks',
            data: {
                name,
                description, 
                date
            }
           
        })
        .then((response)=> {

            resolve(response.data)

               

            
        })
        .catch((err) =>{
            reject(err)
        });
    
    })
   
}


export const getTask =async() => {
    return new Promise((resolve,reject)=>{
        
        const email = JSON.stringify(localStorage.getItem("email"))
       
        if(localStorage.getItem(email)){
            resolve(JSON.parse(localStorage.getItem(email)))  
        }else{
            axios({
                method: 'GET',
                url: 'https://my-json-server.typicode.com/felipeZapata196/lista-tareas/tasks',
               
            })
            .then((response)=> {
                localStorage.setItem(email, JSON.stringify(response.data))
                resolve(response.data);
            })
            .catch((err) =>{
                reject(err)
            });
        }
       
    
    })

}

// Esta es la lógica que tenía en el otro proyecto. (tasks es = que lo que guardo en data "en ProvisionalTasks")
// En local storage con .splice() podemos borrar / acceder al item en la posición del array "1"
// PARA BORRAR TENGO QUE HACER UN FILTER DE DATA 

// export const deleteTask = async (id) => {

//     console.log("Id para borrar ", id)

//     swal({
//       title: "Are you sure?",
//       text: "Task will be deleted",
//       icon: "warning",
//       buttons: true,
//       dangerMode: true,
//     })
//     .then((willDelete) => {
//       console.log(willDelete);
//       if (willDelete) {
//         console.log("Entro")
//         swal("Poof! Task has been deleted successfully", {
//           icon: "success",
//         })
//         setTasks(tasks.filter((task) => task.id !== id));
//         axios({
//             method: 'DELETE',
//             url: `https://my-json-server.typicode.com/felipeZapata196/lista-tareas/tasks/${id}`,
           
//         })
//         .then (res => window.location.href="/")
//       }
//     });
//     console.log(tasks)
//   }

// En data ya tenemos todas las tareas. Simplemente tenemos que hacer un filter por id y sacar los datos de la tarea con ese id
export const editTask = (idTask) => {
    return idTask
}