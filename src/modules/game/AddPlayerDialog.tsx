import { PlusOutlined } from "@ant-design/icons"
import { Button, Input, Modal } from "antd"
import { MyObject } from "./types"
import { useState } from "react";

type AddPlayerDialogPros = {
  isModalOpen: boolean;
  onOk: (players:MyObject[]) => void;
  onCancel: () => void;
}

export const AddPlayerDialog = ({isModalOpen, onOk, onCancel}:AddPlayerDialogPros) => {
  const [players, setPlayers] = useState<MyObject[]>([{id: 1, name: ""}]);

  const handleChangeName = (e:React.ChangeEvent<HTMLInputElement> , playerId:number) => {
    const playerIndex = players.findIndex((player) => player.id === playerId);
    if (playerIndex >= 0) {
      const newArray = [...players];
      newArray[playerIndex].name = e.target.value;
      setPlayers(newArray)
    }
  }
  const handleAddNewPlayer = () => {
    setPlayers([...players, {id: Date.now(), name: ""}]);
  }
  const handleCancel = () => {
    setPlayers([{id: 1, name: ""}]);
    onCancel();
  }

  const handleOk = () => {
    onOk(players);
    setPlayers([{id: 1, name: ""}]);
  }

  return(
    <Modal title="Players" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      {players.map((player)=>{
        return (<Input className="input-name" value={player.name} key={player.id} onChange={(e) => handleChangeName(e, player.id)}/>)
      })}
      <Button type="default" icon={<PlusOutlined/>} onClick={handleAddNewPlayer}>
        Add a new player
      </Button>
    </Modal>
  )
}