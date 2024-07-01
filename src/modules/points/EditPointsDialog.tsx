import { Input, InputNumber, Modal, Select } from "antd";
import { useRef, useState } from "react";
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from "react-draggable";
import './EditPointsDialog.css'

type EditPointsDialogProps = {
  isEditOpen: boolean;
  onOk: () => void;
  onCancel: () => void;
}

export const EditPointsDialog = ({isEditOpen, onOk, onCancel}:EditPointsDialogProps) => {
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
  const draggleRef = useRef<HTMLDivElement>(null);

  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  return (
      <Modal
        title={
          <div
            style={{
              width: '100%',
              cursor: 'move',
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
            // fix eslintjsx-a11y/mouse-events-have-key-events
            // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
            onFocus={() => {}}
            onBlur={() => {}}
            // end
          >
            Edit your points
          </div>
        }
        open={isEditOpen}
        onOk={onOk}
        onCancel={onCancel}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            nodeRef={draggleRef}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        <div className="edit-points-dialog">
          <div className="edit-item-dialog">
            <label>Player</label>
            <Input/>
          </div>
          <div className="edit-item-dialog">
            <label>Hole</label>
            <Select/>
          </div>
          <div className="edit-item-dialog input-100">
            <label>Score</label>
            <InputNumber/>
          </div>
        </div>

      </Modal>
  );
}