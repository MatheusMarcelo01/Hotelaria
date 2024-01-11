// app/page.tsx
'use client'

import Homepage from "../Components/Home/Homepage"
import Dashboard from "../Components/Dash/Dashboard"
import Status from "../Components/Dash/status"

export default function Page() {
  return (
    <div>
        <Homepage/>
        <Status/>
    </div>

  )
}