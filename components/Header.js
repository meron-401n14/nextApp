import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div className="Header">
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/counter">
      <a style={linkStyle}>Counter</a>
    </Link>
    <style jsx>{`
      background-color: #959c97;
       color:white;
       width:100%;
       height:50px;
    `}</style>

    </div>
 
 );
 
 
    
  
 









export default Header