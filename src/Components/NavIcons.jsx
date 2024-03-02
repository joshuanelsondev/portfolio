// NavIcons.jsx

import { Link as LinkScroll } from "react-scroll";
import { v4 as generateId } from "uuid";
import {
  MdAccountCircle,
  MdHome,
  MdEmail
} from "react-icons/md"; 
import {
  AiFillAppstore,
} from "react-icons/ai";

export default function NavIcons() {

    return (
 
      <div className='flex flex-col gap-10 text-darkGray dark:text-white'>
        {/* Loop through the nav buttons */}
            <div
              key={generateId()}
              className="flex"
            >
              <LinkScroll
                className="peer"
                activeClass="outline outline-2 rounded-full"
                to={`home`}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                <MdHome
                  className=" dark:text-white rounded-full p-2 cursor-pointer"
                  size={40}
                />
              </LinkScroll>
            </div>
            <div
              key={generateId()}
              className="flex"
            >
              <LinkScroll
                className="peer"
                activeClass="outline outline-2 rounded-full "
                to={`about`}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <MdAccountCircle
                  className=" dark:text-white rounded-full p-2 cursor-pointer"
                  size={40}
                />
              </LinkScroll>
            </div>
            <div
              key={generateId()}
              className="flex"
            >
              <LinkScroll
                className="peer"
                activeClass="outline outline-2 rounded-full "
                to={`portfolio`}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <AiFillAppstore
                  className=" dark:text-white rounded-full p-2 cursor-pointer"
                  size={40}
                />
              </LinkScroll>
            </div>
            <div
              key={generateId()}
              className="flex"
            >
              <LinkScroll
                className="peer"
                activeClass="outline outline-2 rounded-full "
                to={`contact`}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <MdEmail
                  className=" dark:text-white rounded-full p-2 cursor-pointer"
                  size={40}
                />
              </LinkScroll>
            </div>
      </div>
    )
}