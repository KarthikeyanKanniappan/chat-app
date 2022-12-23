import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ChatBox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/SideDrawer";

const ChatPage = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    let newer = window.localStorage.getItem("User");
    let newUser = JSON.parse(newer);
    setUser(newUser);
  }, []);
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats user={user} />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatPage;
