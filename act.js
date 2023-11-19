//definición del DSL

class WorkflowDSL{
    constructor() {
        this.tasks = []
    }


task (name,action) {
    this.tasks.push({name, action})
}

run(){
    this.tasks.forEach((task)=>{
        console.log(`Ejecutando tarea: ${task.name}`)
        task.action()
        })
    }
}

//Uso del DSL
const workflow = new WorkflowDSL()

//Definición de tareas utilizando el DSL
workflow.task("Tarea 1", ()=> {
    console.log("Identificación de ineficiencias")
})

workflow.task("Tarea 2", ()=> {
    console.log("Reducción de costes y aumento de rentabilidad")
})

workflow.task("Tarea 3", ()=> {
    console.log("Identificación de oportunidades de automatización")
})


workflow.run()


