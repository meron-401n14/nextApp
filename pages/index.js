
import Layout from '../components/MyLayout';
import Link from 'next/link';
import './index.scss';
import nextaddImage from '../images/nextadd.jpg'




export default function Index() {
  return (
   
      <Layout>

<h1>Welcome!</h1>
    <p>It only ends once. Anything that happens before that is just progress.</p>

    <span>— Jacob, Lost</span>
<style jsx>{`
  h1,
  {
    font-family: 'Arial';
    color: #46634e;
    display: center;
  }
  
  
  `}</style>
  <div>
    <header>
    <img src={ nextaddImage } alt='display' id='displyImage' />

    </header>
  </div>
      </Layout>

     
      

    
  );

  
}
































// import Link from 'next/link';
// import Header from '../components/Header';
// import Layout from '../components/MyLayout'


// export default function Index() {
//   return (
//     <div>

//     <Layout>
//     </Layout>
//     <p>Hello Next.js</p>
      
//       <p>Hola</p>
//     </div>
// );
// }
 
    

   