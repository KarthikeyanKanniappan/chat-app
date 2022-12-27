import { Box, IconButton, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { env } from "../config.js";
import UserContext from "../UserContext.js";
import UpdateGroupChatModal from "./UpdateGroupChatModal.jsx";
import { getSender, getSenderFull } from "./ChatLogic.js";
import ProfileModal from "./ProfileModal.jsx";

const SingleChat = ({ fetchAgain, setFetchAgain, user }) => {
  let context = useContext(UserContext);
  const { selectChat, setSelectedChat } = context;
  return (
    <>
      {selectChat ? (
        <>
          <Text
            fontSize={{ base: "28px", md: "30px" }}
            pb={3}
            px={2}
            w="100%"
            fontFamily="Mukta"
            display="flex"
            justifyContent={{ base: "space-between" }}
            alignItems="center"
          >
            <IconButton
              display={{ base: "flex", md: "none" }}
              icon={<ArrowBackIosIcon />}
              onClick={() => setSelectedChat("")}
            />
            {!selectChat.isGroupChat ? (
              <>
                {getSender(user, selectChat.users)}
                <ProfileModal user={getSenderFull(user, selectChat.users)} />
              </>
            ) : (
              <>
                {selectChat.chatName.toUpperCase()}
                <UpdateGroupChatModal
                  user={user}
                  fetchAgain={fetchAgain}
                  setFetchAgain={setFetchAgain}
                />
              </>
            )}
          </Text>
          <Box
            display="flex"
            flexDir="column"
            justifyContent="flex-end"
            p={3}
            bg="#E8E8E8"
            w="100%"
            h="100%"
            borderRadius="lg"
            overflowY="hidden"
          ></Box>
        </>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          h="100%"
        >
          <Text fontSize="3xl" pb={3} fontFamily="Mukta">
            Click on a user to start chatting
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleChat;
