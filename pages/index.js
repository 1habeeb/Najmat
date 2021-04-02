import React from "react"
import Link from "next/link"
import {useAuth} from "../auth"
import Layout from '../compoenets/layout'
import { Flex, Box, Button, Text, Heading, Stack } from "@chakra-ui/core"
import { Container } from "postcss"

import { ThemeProvider, CSSReset } from '@chakra-ui/core'

// in your index.tsx, add this


export default function Home() {
  const {user} = useAuth();
  return (
    <ThemeProvider>  
      <Layout>
        <Flex>
          
        </Flex>
      </Layout>
    </ThemeProvider>
    )
  }
