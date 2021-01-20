import React from 'react'
import AsideAbout from './AsideAbout'
import AsideRecent from './AsideRecent'

const Aside = () => {
    return (
        <aside className="aside">
            <div className="aside-inner">
                <AsideAbout/>
                <AsideRecent/>
            </div>
        </aside>
    )
}

export default Aside
