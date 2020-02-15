import Header from '../components/Header'
import Layout from '../components/MyLayout'
import Counter from '../components/Counter'
import counterImage from '../images/counter.jpg'




export default function Second() {
  return (
    <div>

      <Layout>
<div>
  <header>
  <img src={counterImage} alt='display' id='displyImage' />
  </header>
</div>

      </Layout>
      
     <p>count here!</p>
        <Counter />

      
    </div>



    

);
}
   

  