import React from 'react'

const LeftSidebar = () => {
  return (
    <>
     <aside className="left-sidebar">
        <div className="scroll-sidebar">

          <nav className="sidebar-nav">
            <ul id="sidebarnav">

              {/* HRM */}

              <li className={`sidebar-item `}>

                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="#" onClick={(e) => e.preventDefault()}
                  aria-expanded="false"
                >
                  <i data-feather="file-text" className="feather-icon" />
                  <span className="hide-menu">Admin</span>
                </a>

                <ul aria-expanded="false" className="collapse first-level">
                  {/* Category */}
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="#" onClick={(e) => e.preventDefault()}
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dns" />
                      <span className="hide-menu">Category</span>
                    </a>
                    <ul aria-expanded="false" className="collapse second-level">
                      <li className={`sidebar-item`}>
                        
                          <a href="modules/hr/category/create">
                            <a className="sidebar-link">
                              <i className="mdi mdi-drawing" />
                              <span className="hide-menu">Add Category</span>
                            </a>
                          </a>
                       
                      </li>
                     
                    </ul>
                  </li>
                  {/* End Category */}

   
                </ul>
              </li>
              {/* End HRM */}
            </ul>
          </nav>

        </div>
      </aside>
    </>
  )
}

export default LeftSidebar