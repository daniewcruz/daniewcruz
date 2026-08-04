import { socialHandles} from "../../sources";
import "./SocialHandles.css";

const SocialHandles = () => {
    return (
        <div className="handles-container">
          {socialHandles.map((handle, index) => (
             <a href={handle.link} target="_blank" rel="noreferrer" className="flex-center icon-wrapper" key={index} aria-label={handle.name}>
              {handle.icon}  
             </a> 
          ))
          }  
        </div>
    );
};

export default SocialHandles;