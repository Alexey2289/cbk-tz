import React from 'react'
import ModalForm from '../ModalForm'
import './TreeNode.css'

const TreeNode = ({
  node,
  addNewNode,
  editNode,
  removeNode
}) => {
  return (
    <>
      <li>
          <span>{node.name}</span>
          <ModalForm 
            node={node} 
            addNewNode={addNewNode} 
            editNode={editNode}
            removeNode={removeNode}
          />
      </li>
      <div>
        <div>{node.attribute}</div>
      </div>
      </>
  )
}

export default TreeNode