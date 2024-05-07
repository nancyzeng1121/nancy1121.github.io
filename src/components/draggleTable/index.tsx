import * as React from 'react';
import {Table} from 'antd';
import { DragSourceHookSpec, useDrag, useDrop} from 'react-dnd';
import { ItemTypes } from './ItemTypes';
interface CustomDragSourceHookSpec<ItemType> extends DragSourceHookSpec<ItemType, any, any> {
  beginDrag: (monitor: any) => ItemType;
}

interface DragItemProps{
  id: number | string,
  value: string
}

interface DraggableCellProps {
  cellData: DragItemProps,
  columnIndex: number,
  moveCell: (sourceId: string, targetId: number | string) => void
}

const DraggableCell = ({ cellData: {id, value}, columnIndex, moveCell }: DraggableCellProps) => {

  const useCustomDrag = (
    spec: CustomDragSourceHookSpec<any>
  ) => useDrag(spec);
  const [{ isDragging }, drag] = useCustomDrag({
    type: ItemTypes.CELL,
    item: { type: ItemTypes.CELL, id: id, value: value, columnIndex,  offsetX: 0, offsetY: 0 },
    beginDrag: (monitor) => {
      const initialOffset = monitor.getClientOffset();
      return { type: ItemTypes.CELL, id: id, value: value, columnIndex, offsetX: initialOffset.x, offsetY: initialOffset.y };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      getTargetIds: monitor.getTargetIds()
    }),
  });

  const handleDrop = (item: any) => {
    // 在这里处理拖放操作

    if (item.id !== columnIndex) {
      moveCell(item.id, id);
    }
  };


  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CELL,
    drop: handleDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      getItem: monitor.getItem()
    }),
  });



  return (
    <div ref={(node) => drag(drop(node))} style={{ opacity: isDragging ? 0.5 : 1, border: isOver ? '2px solid red' : 'none' }}>
      {value}
    </div>
  );
};


const data = [
  {
    key: '1',
    name1: { id: 1, value: 'A' },
    name2: { id: 3, value: 'X' },
  },
  {
    key: '2',
    name1: { id: 2, value: 'B' },
    name2: { id: 4, value: 'Y' },
  },

];

const swapValues = (data: any, id1: any, id2: any) => {
  let item1: any, name1: any, item2: any, name2: any;
  for (let item of data) {
    for (let name of ['name1', 'name2']) {
      if (item[name].id === id1) {
        item1 = item;
        name1 = name;
      }
      if (item[name].id === id2) {
        item2 = item;
        name2 = name;
      }
    }
  }
  if (item1 && item2) {
    let temp = item1[name1].value;
    item1[name1].value = item2[name2].value;
    item2[name2].value = temp;
  }
};


const moveCell = (sourceId: any, targetId: any) => {
  swapValues(data, sourceId, targetId)
  console.log(`Move cell from ${sourceId} to ${targetId}`);
};

const DragDropTable = () => {
  const columns: any = [
    {
      title: '名称1',
      dataIndex: 'name1',
      width: '50%',
      render: (text: any, record: any) => (
        <DraggableCell
          cellData={record.name1}
          columnIndex={record.id}
          moveCell={moveCell}
        />
      ),
    },
    {
      title: '名称2',
      dataIndex: 'name2',
      width: '50%',
      render: (text: any, record: any) => (
        <DraggableCell
          cellData={record.name2}
          columnIndex={record.id}
          moveCell={moveCell}
        />
      ),
    },
  ];

  return <Table columns={columns} dataSource={data}/>


}

export default DragDropTable;
