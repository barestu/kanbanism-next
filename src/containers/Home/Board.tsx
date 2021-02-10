import React, { useEffect, useState } from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';
import { DragDropContext, DropResult, resetServerContext } from 'react-beautiful-dnd';
import BoardList from '../../components/Board/BoardList';
import { reorder, move } from '../../utils/boards';

resetServerContext();

const Board = () => {
  const [componentLoaded, setComponentLoaded] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      name: 'To Do',
      bgColor: 'primary.300',
      data: [
        {
          id: 1,
          title: 'Lorem ipsum dolor sit amet',
        },
        {
          id: 2,
          title: 'Everything about you.'
        }
      ],
    },
    {
      id: 2,
      name: 'In Progress',
      bgColor: 'blue.400',
      data: [],
    },
    {
      id: 3,
      name: 'Complete',
      bgColor: 'green.400',
      data: [],
    },
  ]);

  useEffect(() => {
    setComponentLoaded(true);
  }, []);

  const getListData = (id: string) => {
    return data.find(list => list.id.toString() === id).data;
  }

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const results = reorder(
        getListData(source.droppableId),
        source.index,
        destination.index,
      );

      setData(data.map(list => {
        if (list.id.toString() === source.droppableId) {
          return {
            ...list,
            data: results
          };
        }
        return list;
      }));
    } else {
      const results = move(
        getListData(source.droppableId),
        getListData(destination.droppableId),
        source,
        destination,
      );

      setData(data.map(list => {
        if (list.id.toString() === source.droppableId) {
          return {
            ...list,
            data: results.listSource,
          };
        }
        if (list.id.toString() === destination.droppableId) {
          return {
            ...list,
            data: results.listDest,
          };
        }
        return list;
      }))
    }
  };

  return (
    <Box>
      <Box mb="8" px="4">
        <Text fontWeight="bold" fontSize="4xl" color="primary">
          Team Workflow
        </Text>
        <Text color="secondary" w="70%">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sequi quaerat voluptates
          fugiat. Quidem quibusdam et eius consequuntur, beatae qui?
        </Text>
      </Box>

      <HStack>
        {componentLoaded ? (
          <DragDropContext onDragEnd={onDragEnd}>
            {data.map(list => (
              <BoardList
                key={list.id}
                droppableId={list.id.toString()}
                title={list.name}
                titleBgColor={list.bgColor}
                data={list.data}
              />
            ))}
          </DragDropContext>
        ) : null}
      </HStack>
    </Box>
  );
};

export default Board;
