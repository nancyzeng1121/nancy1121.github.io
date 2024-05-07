import * as React from 'react';
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import DragDropTable from "../../../components/draggleTable";


const DragSortingTable = () => {
  return (
    <DndProvider backend={HTML5Backend}>
        <DragDropTable/>
    </DndProvider>

  );
};

export default DragSortingTable;
