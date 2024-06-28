import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PreparationGame.css"
import { PlayerList } from "./PlayerList";
import { Button, InputNumber } from "antd";

type MyObject = {
  id: number;
  name: string;
}

export const PreparationGame = () => {
  const navigate = useNavigate();
  const [holes, setHoles] = useState<number>(1);
  const [totalList, setTotalList] = useState<MyObject[]>([]);

  const handleGenerateTable = () => {
    const array: string[] = totalList.map(item => item.name);
    const arrayString = JSON.stringify(array);
    navigate(`/table/${holes}?players=${encodeURIComponent(arrayString)}`);
  };

  // Funzione per formattare il valore numerico
  const formatter = (value: number | string | undefined): string => {
    if (value === undefined) return '';
    return `${value}`.replace(/[^\d]/g, '');
  };

  // Funzione per rimuovere caratteri non numerici e restituire un numero
  const parser = (value: string | undefined): number => {
    if (!value) return 0;
    const parsedValue = value.replace(/[^\d]/g, '');
    return parsedValue ? parseInt(parsedValue, 10) : 0;
  };

  // Funzione per gestire il cambiamento del valore
  const handleSetHoles = (value: number | null) => {
    if (value !== null) {
      setHoles(value);
    }
  };

  const handleAddPlayers = (players:MyObject[]) => {
    setTotalList(previousList => [...previousList, ...players]);
  }

  return (
    <>
      <h1>Preparati a giocare...</h1>

      <div className="input-box">
        <h4 className="label-description">Number of holes</h4>
        <InputNumber
          min={1} max={30} defaultValue={9} formatter={formatter} parser={parser}
          onChange={handleSetHoles}
        />
      </div>
      <div className="player-input-box">
        <PlayerList
        totalList={totalList}
        onAddPlayers={handleAddPlayers} />
      </div>

      <Button onClick={handleGenerateTable}>Generate table to play</Button>
    </>
  )
}