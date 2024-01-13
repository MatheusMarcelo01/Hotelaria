'use client'

import Homepage from "../../src/Components/Home/Homepage"
import Status from "../../src/Components/Dash/status"
import Form from "../Components/Formulários/Form"
import NavbarDash from "../Components/Dash/Navbar_dash"


export default function Page() {
  return (
    <div>
        <NavbarDash/>
        <Status/>
        <Form/>
    </div>

  )
}