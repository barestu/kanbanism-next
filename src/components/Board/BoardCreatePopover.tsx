import React, { FormEvent, useRef, useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Popover,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from '@chakra-ui/react';
import { FiPlusCircle } from 'react-icons/fi';

interface BoardCreateProps {
  onCreate?: () => void;
}

const BoardCreatePopover = ({ onCreate = () => {} }: BoardCreateProps) => {
  const textareaRef = useRef();
  const [showPopover, setShowPopover] = useState(false);
  const [title, setTitle] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) {
      return;
    }

    setTitle('');
    setShowPopover(false);
    onCreate();
  };

  return (
    <Popover
      isOpen={showPopover}
      onClose={() => setShowPopover(false)}
      initialFocusRef={textareaRef}
      placement="bottom"
      gutter={16}
      closeOnBlur
      isLazy
    >
      <PopoverTrigger>
        <IconButton
          background="transparent"
          aria-label="Add card"
          icon={<FiPlusCircle size="24" color="white" />}
          onClick={() => setShowPopover(true)}
          minW="0"
          h="0"
        />
      </PopoverTrigger>

      <PopoverContent>
        <PopoverCloseButton />
        <Box pt="8" pb="4" px="4">
          <form onSubmit={handleSubmit}>
            <Box mb="4">
              <Textarea
                ref={textareaRef}
                value={title}
                placeholder="Enter card title"
                onChange={e => setTitle(e.target.value)}
              />
            </Box>
            <Flex justifyContent="flex-end">
              <ButtonGroup>
                <Button onClick={() => setShowPopover(false)}>
                  Cancel
                </Button>
                <Button type="submit" background="red.400" color="white">
                  Save
                </Button>
              </ButtonGroup>
            </Flex>
          </form>
        </Box>
      </PopoverContent>
    </Popover>
  );
};

export default BoardCreatePopover;
