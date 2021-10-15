
import catImage from "../../assets/img/cat.svg"
const page404 = () => {

    return (
        <section id="search">
            <div className="container clearfix">
                <div className="row">
                    <label htmlFor="search" className="hideLabel">Procurar</label>
                    <div className="card ">
                        <img src={catImage} className="cat-image" alt="Gato roxo" />
                        <h1 className="text-center title"> <span className="text_brand_one">404</span></h1>
                    </div>                  
                </div>
            </div>
        </section>
    )
}

export default page404