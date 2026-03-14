import React from 'react'
import Cartao from './Cartao'
import Feedback from './Feedback'
import Comentario from './Comentario'

const App = () => {
  const textoOK = "Aprovar"
  const textoNOK = "Reprovar"

  const funcaoOK = () => alert("Comentário Aprovado")
  const funcaoNOK = () => alert("Comentário Reprovado")

  const componenteFeedback = (
    <Feedback
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}
      textoOK={textoOK}
      textoNOK={textoNOK}
    />
  )

  return (
    <div className="container-fluid">

      <div className="row justify-content-center">
        <div className="col-12">
          <Cartao cabecalho="Mary.Lockman69">
            <Comentario
              avatar="https://i.pravatar.cc/172"
              texto="Tempora et rerum culpa vel illo. Quia velit esse. Quaerat sint optio voluptas quam autem dolorem id cumque. Ad eum voluptas ratione tempore doloribus consequatur eaque. Quae ratione itaque ipsum temporibus enim pariatur. Asperiores aut numquam et perferendis voluptatem laborum dolores deleniti non."
              time="6:15 PM"
            />
            {componenteFeedback}
          </Cartao>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12">
          <Cartao cabecalho="Brock_Reichel18">
            <Comentario
              avatar="https://i.pravatar.cc/150"
              texto="Necessitatibus molestiae error est vel beatae sunt corporis repudiandae. Consequatur enim ut et blanditiis. Quisquam modi error ullam dolores rerum nihil. Distinctio neque at cupiditate dolores. Deleniti aliquid maxime dignissimos fugiat quia ab quia ratione in. Omnis vel omnis sint ut officia sunt dolor autem et."
              time="6:30 PM"
            />
            {componenteFeedback}
          </Cartao>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12">
          <Cartao cabecalho="Nils_Steuber">
            <Comentario
              avatar="https://i.pravatar.cc/100"
              texto="Ullam quaerat et quam ut. Eaque quis et rerum corporis quisquam rem sit modi et. Cupiditate corrupti quia repellendus ut cum tempore. Optio fugit et harum ut fuga mollitia."
              time="6:52 PM"
            />
            {componenteFeedback}
          </Cartao>
        </div>
      </div>

    </div>
  )
}

export default App