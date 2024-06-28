import { useState } from "react";
import { Avatar, Button, List } from "antd"
import { AddPlayerDialog } from "./AddPlayerDialog";
import { MyObject } from "./types";
import { UserOutlined } from "@ant-design/icons";

type PlayerListProps = {
  totalList: MyObject[];
  onAddPlayers: (players:MyObject[]) => void;
}

export const PlayerList = ({onAddPlayers, totalList}:PlayerListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = (players: MyObject[]) => {
    setIsModalOpen(false);
    onAddPlayers(players);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h4 className="label-description">Players</h4>

      <List
        locale={{emptyText: "No players"}}
        itemLayout="horizontal"
        dataSource={totalList}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon={<UserOutlined />} />}
              title={item.name}
            />
          </List.Item>
        )}
      />

      <Button type="primary" onClick={showModal}>
        Add
      </Button>
      <AddPlayerDialog
        isModalOpen={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        />
    </>
  )
}