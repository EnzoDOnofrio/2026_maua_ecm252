const express = require('express')
const mysql2 = require('mysql2/promise')

const app = express()
//middleware 
app.use(express.json())

let conexao

const conectar = async () => {
    try {
        conexao = await mysql2.createConnection({
            host: 'maua-ecm252-enzoo5820-d4bc.e.aivencloud.com',
            user: 'avnadmin',
            password: 'AVNS_0_J6U-Xs0RyvBJ8Tdht',
            database: 'defaultdb',
            port: 17101
        })
        console.log('Conectado ao MySQL')
    }
    catch (erro) {
        console.log(`Erro ao conectar com o banco: ${erro}`)
    }

}
conectar()

//Definição dos Endpoints
app.get('/', (req, res) => {
    res.json({
        mensagem: 'Servidor funcionando'
    })
})

//obter a lista de tarefas
app.get('/tarefas', async (req, res) => {
    try {
        const SQL = 'SELECT * FROM tb_tarefa'
        const [linhas] = await conexao.query(SQL) //desestruturou com [linhas]
        res.json(linhas)
    }
    catch (erro) {
        console.log(erro)
        res.status(500).json({
            erro: 'Erro ao buscar as tarefas'
        })
    }
})

//cadastrar uma tarefa
//suponha que o cliente vai enviar titulo e descricao por meio de uma requisicao
app.post('/tarefas', async (req, res) => {
    try {
        const { titulo, descricao } = req.body
        const SQL = 'INSERT INTO tb_tarefa (titulo, descricao) VALUES (?, ?)'
        const [resultado] = await conexao.query(SQL, [titulo, descricao])
        res.status(201).json({
            cod_tarefa: resultado.insertId,
            titulo: titulo,
            descicao: descricao
        })
    }
    catch (erro) {
        console.log(erro)
        res.status(500).json({
            erro: 'Erro ao cadastrar a tarefa'
        })
    }
})

//rota para atualizar a tarefa
//suponho que ela inteira será atualizada
app.put('/tarefas/:id', async (req, res) => {
    try{
        const { id } = req.params
        const { titulo, descricao } = req.body
        const SQL = 'UPDATE tarefas FROM tb_tarefa SET titulo = ?, descricao = ? WHERE id = ?'
        await conexao.query(SQL, [titulo, descricao, id])
        res.json({ id, titulo, descricao })
    }
    catch(erro){
        console.log(erro)
        req.status(500).json({
            erro: 'Erro ao tentar atualizar uma tarefa'
        })
    }
})

const port = 3000
app.listen(port, () => {
    console.log(`Servidor executando na porta: ${port}`)
})