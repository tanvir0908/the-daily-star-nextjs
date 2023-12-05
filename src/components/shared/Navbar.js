"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import navImage from "@/assets/nav.png";
import { IconButton, Stack } from "@mui/material";

// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const navItems = [
  {
    route: "Home",
    pathname: "/",
  },
  {
    route: "Pages",
    pathname: "/pages",
  },
  {
    route: "Category",
    pathname: "/category",
  },
  {
    route: "News",
    pathname: "/news",
  },
  {
    route: "Post",
    pathname: "/post",
  },
  {
    route: "Contact",
    pathname: "/contact",
  },
];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  return (
    <AppBar position="static" className="bg-[#151515]">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={navImage} width={100} height={100} alt="navImage" />
          <Box className="text-center w-full">
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                <button className="text-white mx-5">{item.route}</button>
              </Link>
            ))}
          </Box>
          <Box>
            <Stack
              direction="row"
              sx={{
                "& svg": {
                  color: "white",
                },
              }}
            >
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
              <IconButton>
                <YouTubeIcon />
              </IconButton>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
