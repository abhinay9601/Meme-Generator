// eslint-disable-next-line no-unused-vars
import react from "react";

const Header = (props) =>{
return(
<div className="h-44 bg-purple-800 flex items-center justify-around">
<img className='h-40 '
        src='http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png'
        alt='Problem?'
      />
      <div className="text-6xl font-bold jus text-white">Meme <br/> "      " Generator</div>
</div>
);
};
export default Header;
