import React, {useEffect , useRef} from 'react'
import {Container} from "reactstrap"
import { NavLink, Link } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import '../../Styles/Header.css'


const nav__links = [
  // {
  //   display: "Home",
  //   path: "/home"
  // },
  // {
  //   display: "Doctor",
  //   path: "/doctor"
  // },
  // {
  //   display: "Patient",
  //   path: "/patients"
  // },
  // {
  //   display: "Log in",
  //   path: "/login"
  // },
  // {
  //   display: "Admin",
  //   path: "/admin"
  // },
]

export default function Header() {

  const headerRef = useRef(null)

  useEffect(()=>{

   window.addEventListener('scroll', ()=>{
    if(document.body.scrollTop>80 || document.documentElement.scrollTop> 80){
      headerRef.current.classList.add("header__shrink")
    } else{
      headerRef.current.classList.remove("header__shrink")
    }
   })

    return ()=> window.removeEventListener("scroll", ()=>{
      headerRef.current.classList.remove("header__shrink")
    })

  },[])

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between"> 
        <div className="logo">
         <h5>OOUTH</h5>
        </div>

        <div className="navigation" >
          <div className="menu d-flex align-items-center gap-5">
            {nav__links.map((link, index)=>{
              const{display, path} = link;

              return <NavLink key={index} to= {path}
              className = {navClass => navClass.isActive? "active__menu": ""}>{display}</NavLink>
            })}
          </div>
        </div>
        <div className="nav__right d-flex align-items-center gap-4  ">
          <span className="cart__">
           
          </span>
          <span className="user">
            {/*<Link to = "/login"> <FaUserAlt className='cart__icon'/></Link>*/}
            {/*<a href="http://localhost:3001/login"> <FaUserAlt className='cart__icon'/></a>*/}
          </span>
          <span className="mobile__">
            <FaBars className='mobile__menu'/>
          </span>
        </div>
        </div>
      </Container>
    </header>
  )
}
