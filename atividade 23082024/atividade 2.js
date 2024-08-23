let tarefas = [];

/**
 * Adiciona uma nova tarefa ao array.
 * @param {string} descricao 
 */
function adicionarTarefa(descricao) {
    if (descricao) {
        tarefas.push({ descricao: descricao, concluida: false });
        console.log(`Tarefa adicionada: "${descricao}"`);
    } else {
        console.log("Descrição da tarefa não pode ser vazia.");
    }
}

/**
 * Lista todas as tarefas cadastradas.
 */
function listarTarefas() {
    if (tarefas.length === 0) {
        console.log("Nenhuma tarefa cadastrada.");
        return;
    }

    tarefas.forEach((tarefa, indice) => {
        const status = tarefa.concluida ? "Concluída" : "Não concluída";
        console.log(`${indice}: ${tarefa.descricao} - ${status}`);
    });
}

/**
 * Remove uma tarefa específica do array, dado seu índice.
 * @param {number} indice
 */
function removerTarefa(indice) {
    if (indice >= 0 && indice < tarefas.length) {
        const tarefaRemovida = tarefas.splice(indice, 1);
        console.log(`Tarefa removida: "${tarefaRemovida[0].descricao}"`);
    } else {
        console.log("Índice inválido.");
    }
}

/**
 * Marca uma tarefa como concluída, dado seu índice.
 * @param {number} indice 
 */
function concluirTarefa(indice) {
    if (indice >= 0 && indice < tarefas.length) {
        tarefas[indice].concluida = true;
        console.log(`Tarefa marcada como concluída: "${tarefas[indice].descricao}"`);
    } else {
        console.log("Índice inválido.");
    }
}

adicionarTarefa("Estudar JavaScript");
adicionarTarefa("Fazer exercícios");
listarTarefas();
concluirTarefa(0);
listarTarefas();
removerTarefa(1);
listarTarefas();