import React, {useState}  from 'react'
import {Modal} from 'react-bootstrap'
import './ModalForm.css'

const ModalForm = ({
    node,
    addNewNode,
    editNode,
    removeNode
}) => {
    const [show, setShow] = useState(false);
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')
    const [actionType, setActionType] = useState('')

    const handleClose = () => setShow(false);

    const handleAdd = () => {
        setTitle('Добавить новый узел')
        setShow(true);
        setActionType('add')
    }

    const handleEdit = () => {
        if (node.isRoot) {
           setTitle('Редактировать корень')
        } else {
           setTitle('Редактировать узел')
        }
        setShow(true);
        setActionType('edit')
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if (text) {
        const newNode = {
            name: text,
            id: Date.now().toString(),
            children: [],
            attribute: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
            parentId: node.id,
          }
    
          if (actionType === 'add') {
            addNewNode(newNode);
          } else {
            editNode(newNode);
          }
      } else {
        alert('Вы не можете создать ноду с пустым текстом!!! Попробуйте снова...');
      }
      setText('')
      handleClose()
    }

    const handleRemove = () => {
        const newNode = {
            name: text,
            id: Date.now().toString(),
            children: [],
            attribute: '',
            parentId: node.id,
        }
        removeNode(newNode)
    }

    return (
        <>
            <div className="action-wrapper">
                <div className="action-add" onClick={handleAdd}></div>
                <div className="action-edit" onClick={handleEdit}></div>
                {node.isRoot ? null : <div className="action-remove" onClick={handleRemove}></div>}
            </div>
  
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        className="form-control"
                        onChange={(e) => setText(e.target.value)}
                    />
                    <div className="group-buttons">
                        <button type="button" className="btn btn-secondary mr-1" onClick={handleClose}>Отменить</button>
                        <button type="submit" className="btn btn-success">Сохранить</button>
                    </div>
                </form>
            </Modal.Body>
            </Modal>
      </>
    )
}

export default ModalForm