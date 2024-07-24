import {
  faPhone,
  faLocationPin,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faViber,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Content5() {
  return (
    <div>
      <h1 className="p-4 text-center font-bold text-3xl mb-8">Contact Me</h1>
      <div className="flex flex-col space-y-4 w-full max-w-md">
        <div className="flex justify-between space-x-12">
          <div className="flex items-center  p-4">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            ranel.soliano@gmail.com
          </div>
          <div className="flex items-center  p-4 w-52">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            09939323364
          </div>
        </div>
        <div className="p-4 flex justify-between">
          <a href="https://www.facebook.com/xLenar30/">
            <FontAwesomeIcon
              icon={faFacebook}
              className="mr-2 text-3xl cursor-pointer animate-bounce hover:animate-none"
            />
          </a>
          <a href="https://www.linkedin.com/in/ranel-soliano-1b844130b/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="mr-2 text-3xl cursor-pointer animate-bounce hover:animate-none"
            />
          </a>
          <FontAwesomeIcon
            icon={faViber}
            className="mr-2 text-3xl cursor-pointer animate-bounce hover:animate-none"
          />
          <a href="https://www.instagram.com/xlenar30?igsh=NTc4MTIwNjQ2YQ==">
            <FontAwesomeIcon
              icon={faInstagram}
              className="mr-2 text-3xl cursor-pointer animate-bounce hover:animate-none"
            />
          </a>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-center">
            <FontAwesomeIcon icon={faLocationPin} className="mr-2" />
            Lapu Lapu City Cebu
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content5;
