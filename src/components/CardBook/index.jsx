import "./style.css"

export const CardBook = () => {
    return (
        <div className="container">
            <div className="header">
                <div>-30% SALE</div>
                <h1>Super Books</h1>
                <small>by Saymon Aguiar</small>
            </div>
            <div className="footer">
                <img className="image" src="https://images.unsplash.com/photo-1599008633840-052c7f756385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="card" />
                <button className="button">Compre agora</button>
            </div>
        </div>
    );
} 