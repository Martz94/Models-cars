import { Layout } from "../../fragments"
import HideParagraph from "../../components/Show"


const Home = () => {
    return (
        <Layout ban={<div className="banner_principal">
          <h2>Faqs</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorem dolores officia aliquid, modi aliquam enim placeat illo officiis vitae ipsum?</p>
        </div>}>
                <h2 className="question_title">About Shop</h2>
                <div className="questions_container-2">
                    <article className="questions_principal">
                        <HideParagraph title={'Pregunta?'} p={'Respuestas...'}/>
                        <HideParagraph/> 
                        <HideParagraph/>
                    </article>
                    <article className="questions_principal ">
                        <HideParagraph title={'Saber más?'} p={'Más infomación...'}/>
                        <HideParagraph/>
                        <HideParagraph/>
                    </article>
                    <article className="questions_principal">
                        <HideParagraph title={'Te gusta la tenologia?'} p={'El avance tecnologico no para de crecer en todo el mundo.'}/>
                        <HideParagraph/>
                        <HideParagraph/>
                    </article>
                </div>
               

        <section>
            <div className="card">
                <div className="card-sub">
                    <p>Gifts Workdo</p>
                    
                    <h5>The Gift Designers Gift Baskets</h5>

                    <p>Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit. Eos, tempore?</p>
                </div>
                <div className="card-sub">
                    <div className="card_content">
                        <div>
                           <p className="">Size:</p>
                        </div>
                        <div className="card_content-sizes">
                                <a className="button_2 button_2-a" href="">
                                  Medium
                                </a>
                        
                                <a className="button_2 button_2-b" href="">
                                    large
                                </a>
                        </div>
                    </div>

                    <div className="card_content-2">
                        $249.00 USD
                        <a className="button_1" href="#">
                          sold out
                        </a> 
                    </div>     
                </div>
            </div>
        </section>
        </Layout>
    )
  }
  
  export default Home