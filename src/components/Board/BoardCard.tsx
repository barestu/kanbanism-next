import React from 'react';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { Avatar, Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';
import { CardShape } from '../../types/data';

interface BoardCardProps {
  droppableId: string;
  item: CardShape;
  index: number;
}

const BoardCard = ({ droppableId, item, index }: BoardCardProps) => {
  return (
    <Draggable key={item.id} draggableId={`${droppableId}-${item.id}`} index={index}>
      {(provided: DraggableProvided, _: DraggableStateSnapshot) => (
        <Box
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          userSelect="none"
          background="#fff"
          borderRadius="xl"
          boxShadow="xl"
          py="4"
          px="6"
          mb="4"
        >
          <Flex alignItems="center" justifyContent="space-between" mb="2">
            <Text fontSize="sm" fontWeight="bold" color="primary.400">BMG - 1310</Text>
            <IconButton
              background="transparent"
              aria-label="Card menu"
              icon={<BsThreeDots color="primary.400" />}
              minW="0"
              h="0"
            />
          </Flex>
          <Box mb="4">
            <Text color="primary" fontWeight="600">{item.title}</Text>
          </Box>
          <Flex alignItems="center" justifyContent="space-between">
            <Text color="gray.400">Jul. 22, 2020</Text>
            <Avatar size="xs" />
          </Flex>
        </Box>
      )}
    </Draggable>
  );
};

export default BoardCard;
