import React from 'react'
import './TreeViewJson.css'

const TreeviewJson = ({treeData}) => {
    return (
        <pre>
            {JSON.stringify(treeData, null, 2)}
        </pre>
    )
}

export default TreeviewJson