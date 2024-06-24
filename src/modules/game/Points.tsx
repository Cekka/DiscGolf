import { PlusOutlined } from "@ant-design/icons";
import { Button, Input, InputNumber, Modal } from "antd"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Points = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleGenerateTable = () => {
    const array = ['apple', 'banana', 'cherry'];
    const arrayString = JSON.stringify(array);
    navigate(`/table/9?fruits=${encodeURIComponent(arrayString)}`);
  };


  return (
    <>
      <h1>Preparati a giocare...</h1>
      <div style={{padding: "20px"}}>
        <h4 style={{display: "inline", marginRight:"10px"}}>Number of holes</h4>
        <InputNumber min={1} max={30} defaultValue={9}/>
      </div>
      <div style={{padding: "20px"}}>
        <h4 style={{display: "inline", marginRight:"10px"}}>Players</h4>
        <Button type="primary" onClick={showModal}>
          Add players
        </Button>

        <Modal title="Players" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Input placeholder="Name" />
          <Button type="default" icon={<PlusOutlined />}>Add a new player</Button>
        </Modal>
      </div>
      <Button onClick={handleGenerateTable}>Generate table to play</Button>
    </>
  )
}