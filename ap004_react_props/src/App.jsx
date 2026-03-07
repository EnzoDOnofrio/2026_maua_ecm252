import Pedido from './Pedido.jsx'

export default () => {
  return (
    <div className="container border">
      <div className="row">
        <div className="col-12">
          {/* i.fa-solid.fa-hippo (emmet) */}
          <i className="fa-solid fa-hippo fa-3x"></i>
        </div>
      </div>
      <div className="row">
        <div className="col sm-12 col-md-6 col-xl-3">
          <Pedido 
            date="14/06/2026"
            icon="camera"
            title="Câmera"
            description="Uma câmera 4k"
            />
        </div>
        <div className="col sm-12 col-md-6 col-xl-3">
          <Pedido 
            date="15/06/2026"
            icon="book"
            title="Livro"
            description="Um bom livro"
          />
        </div>
        <div className="col sm-12 col-md-6 col-xl-3">
          <Pedido 
          date="16/06/2026"
          icon="bicycle"
          title="Bicicleta"
          description="Uma bibicleta"
          />
        </div>
        <div className="col sm-12 col-md-6 col-xl-3">
          <Pedido 
          date="17/06/2026"
          icon="pencil"
          title="Lápis"
          description="Um bom lápis"
          />
        </div>
      </div>
    </div>
  )
}