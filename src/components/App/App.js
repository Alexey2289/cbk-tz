import React, { useState } from 'react'
import TreeView from '../TreeView'
import TreeViewJson from '../TreeViewJson'
import initialTreeData from '../../fakeData'
import './App.css'

const App = () => {
    const [treeData, setTreeData] = useState(initialTreeData)

    const handleAction = (node, data = { ...treeData }, type) => {
        if (data.id === node.parentId) {
            if (type === 'add') {
                data.children.push(node)
                setTreeData({...treeData, children: data.children})
            } else {
                data.name = node.name
                setTreeData({...treeData, name: data.name})
            }
        }
        data.children.forEach(item => {
            if (item.id === node.parentId) { 
               if (type === 'add') {
                  item.children.push(node) 
               } else {
                  item.name = node.name
               }
            } else {
                if (type === 'add') {
                    handleAction(node, item, 'add')
                } else {
                    handleAction(node, item, 'edit')
                }
            }
        })
        if (type === 'add') {
            setTreeData({...treeData, children: data.children})
        } else {
            setTreeData({...treeData, name: data.name})
        }
    }

    const addNewNode = (node, data = { ...treeData }) => {
        handleAction(node, data, 'add')
    }

    const editNode = (node, data = { ...treeData }) => {
        handleAction(node, data, 'edit')
    }

    const removeNode = (node, data = { ...treeData }) => {
        data.children.forEach((item, index, array) => {
            if (item.id === node.parentId) {
                array.splice(index, 1)
            } else {
                removeNode(node, item)
            }
        })
        setTreeData({...treeData, children: data.children})
    }

    return (
        <div className="app-wrapper">
            <div className="mr-5">
                <TreeView 
                    treeData={treeData} 
                    addNewNode={addNewNode} 
                    editNode={editNode}
                    removeNode={removeNode}
                />
            </div>
            <div className="ml-5">
                <TreeViewJson treeData={treeData}/>
            </div>
        </div>
    )
}

export default App