import React from 'react'

interface Props {
        children: React.ReactNode;
        onClick: () => void;
        color?: 'primary'| 'secondary'| 'success'| 'danger'| 'warning'| 'info'| 'light'| 'dark'| 'link'| 'react'| 'angular'| 'vue'| 'bootstrap'| 'tailwind'| 'bulma'| 'material'| 'semantic'| 'foundation'| 'pure'| 'skeleton'| 'milligram'| 'mini'| 'custom'| 'default';
}

const Button = ({children, onClick, color ="primary"}: Props) => {
    return (
        <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
    )
}

export default Button