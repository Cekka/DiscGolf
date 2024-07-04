import { Table, TableColumnsType } from "antd";
import { useMemo, useState } from "react";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { EditPointsDialog } from "./EditPointsDialog";

export const GameBoard = () => {
  const {holes} = useParams();

  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const playersParam = urlParams.get('players');
  const decodedPlayers = decodeURIComponent(playersParam!);
  const [row, setRow] = useState<{key: string, name:string}>({key:'', name:''});
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);

  const handleClickEdit = (editRow:{key: string, name:string}) => {
    setIsEditOpen(true);
    setRow(editRow);
  }

  const handleEditOk = () => {
    setIsEditOpen(false);
  }

  const columns = useMemo((): TableColumnsType => {
    const holesColumns = [];

    if (!isNaN(Number(holes))) {
      for (let i = 1; i <= Number(holes); i++ ) {
        holesColumns.push(
          {
            title: `Hole ${i}`,
            dataIndex: `hole_${i}`,
            key: i,
            width: 150,
          }
        )}}
        return (
          [
            {
            title: 'Full Name',
            width: 100,
            dataIndex: 'name',
            key: 'name',
            fixed: 'left'
            },
            ...holesColumns,
            {
              title: 'Action',
              key: 'operation',
              fixed: 'right',
              width: 100,
              render: (editRow) => <a onClick={()=>handleClickEdit(editRow)}>edit</a>,
            },
          ]
        );
      },[holes]);



  const initialData = useMemo(() => {
    const rows = [];
    let playersArray = [];
    try {
        playersArray = JSON.parse(decodedPlayers);
    } catch (e) {
        return [];
    }

    let holeInitialValues = {};
    for (let j = 1; j <= Number(holes); j ++ ) {
      holeInitialValues = {...holeInitialValues, [`hole_${j}`]: 0}
    }
    if (!isNaN(Number(holes))) {
      for (let i = 0; i < playersArray.length; i++) {
        rows.push({
          key: `${playersArray[i]} ${i}`,
          name: playersArray[i],
          ...holeInitialValues
        });
      }
    }
    return rows;
  },[decodedPlayers, holes]);

  const [data, setData] = useState(initialData);

  return(
    <>
      <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
      <EditPointsDialog
        isEditOpen={isEditOpen}
        onOk={handleEditOk}
        onCancel={()=>setIsEditOpen(false)}
        row={row}
        />
    </>
  )
}