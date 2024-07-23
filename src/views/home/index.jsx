import { json } from "react-router-dom"
import { Layout } from "../../fragments"
import { useEffect, useState } from "react"

const Home = () => {
  const [recipes, setRecipes] = useState([])

  const getRecipes = () => {
    fetch('http://localhost:3001/recetas')
    .then(response=> response.json(json))
    .then(data=> {setRecipes(data)})
    .catch(err=>{console.log(err)})
  }

  const getOneRecipe = (id) => {
    console.log(id)
    fetch('http://localhost:3001/recetas/'+id)
    .then(response=> response.json(json))
    .then(data=> {console.log(data)})
    .catch(err=>{console.log(err)})
  }
  useEffect(()=>{
getRecipes()
  },[])

  return (
    <Layout
      ban={
        <div className="banner_principal">
          <h2>Home</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorem dolores officia aliquid, modi aliquam enim placeat illo officiis vitae ipsum?</p>
          
        </div>
      }>
    </Layout>
  )
}

export default Home