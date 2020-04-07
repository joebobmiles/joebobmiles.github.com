import React from "react"


type LayoutProps = {
    children?: any
}


export default ({ children }: LayoutProps) => (
  <>
    <h1>Notes2Self</h1>

    {children}

    <p>&copy; Joseph R Miles 2020</p>
  </>
)