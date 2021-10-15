import catImage from "../../assets/img/cat.svg"

type LoadingProps = {
    show: boolean
}

const Loading = (props: LoadingProps) =>{
    if(!props.show) return <></>
    return(
    <div className="loading">
        <div className="loading_content">
            <img src={catImage} className="cat_image" alt="Gato roxo" />
            <div className="card cat_card">
                <h3 className="text-center title">Carregando</h3>
            </div>
        </div>
    </div>
    )

}

export default Loading