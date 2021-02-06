import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Droppable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import BoardCard from './BoardCard';
import { CardShape } from '../../types/data';
import BoardCreatePopover from './BoardCreatePopover';

interface BoardListProps {
  droppableId: string;
  data: CardShape[];
  title: string;
  titleBgColor?: string;
}

const BoardList = ({
  droppableId,
  data,
  title,
  titleBgColor,
}: BoardListProps) => {
  return (
    <Box px="4">
      <Flex
        background={titleBgColor || 'primary.400'}
        borderRadius="xl"
        justifyContent="space-between"
        alignItems="center"
        boxShadow="xl"
        py="3"
        px="6"
        mb="4"
      >
        <Text color="white">{title} - {data.length}</Text>
        <BoardCreatePopover />
      </Flex>

      <Droppable droppableId={droppableId}>
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
          <Box
            {...provided.droppableProps}
            ref={provided.innerRef}
            background={snapshot.isDraggingOver ? 'whiteAlpha.100' : 'transparent'}
            width="290px"
            minHeight="400px"
            maxHeight="60vh"
            overflowY="auto"
          >
            {data.map((item, idx) => (
              <BoardCard
                key={item.id}
                droppableId={droppableId}
                item={item}
                index={idx}
              />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Box>
  );
};

export default BoardList;
