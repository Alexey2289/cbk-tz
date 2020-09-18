import React from 'react'
import TreeNode from '../TreeNode'
import './TreeView.css'

const TreeView = ({
  treeData,
  addNewNode,
  editNode,
  removeNode
}) => {
    const showTreeData = data => {
      return (
          <ul key={data.id}>
            <TreeNode 
              node={data}
              addNewNode={addNewNode}
              editNode={editNode}
              removeNode={removeNode}
            />
            {data.children.map(item => showTreeData(item))}
          </ul>
      )
    }


    return (
        showTreeData(treeData)
    )
}

export default TreeView