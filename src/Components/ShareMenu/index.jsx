import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, IconButton, MenuGroup, HStack, Text } from "@chakra-ui/react"
import { MdOutlineShare } from 'react-icons/md'
import {
    FacebookIcon,
    WhatsappIcon,
    TwitterIcon,
    FacebookShareButton,
    WhatsappShareButton,
    TwitterShareButton
} from 'react-share'

export default function ShareMenu({ item }) {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Share'
                icon={<MdOutlineShare size={28} color='gray' />}
                variant='link'
            />
            <MenuList>
                <MenuItem
                    icon={<FacebookIcon round size={22} />}
                    as={FacebookShareButton}
                    url='http://192.168.100.10:3000/'
                    quote={item.postTitle}
                    hashtag='#Mendoza'
                >
                    Facebook
                </MenuItem>
                <MenuItem
                    icon={<WhatsappIcon round size={22} />}
                    as={WhatsappShareButton}
                    url='http://192.168.100.10:3000/'
                    title={item.postTitle}
                >
                    Whatsapp
                </MenuItem>
                <MenuItem
                    icon={<TwitterIcon round size={22} />}
                    as={TwitterShareButton}
                    url='http://192.168.100.10:3000/'
                    title={item.postTitle}
                >
                    Twitter
                </MenuItem>
            </MenuList>
        </Menu>
    )
}