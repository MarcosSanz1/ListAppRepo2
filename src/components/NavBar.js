import React, { useEffect, useState } from "react";
import { Avatar, Menu, MenuItem, Typography, Box, ListItemIcon } from "@mui/material";
import { doLogout } from "../services/user.service";
import { loginStore } from '../store/loginStore';
import { Logout, ExpandMore } from "@mui/icons-material";
import queryStore from '../store/queryStore';
import moment from "moment";

export const NavBar = ()=>{

    let today = new Date().toLocaleDateString()
    
    const hoy = moment().format('ll');

    const [open, setOpen] = useState(false)
    const [query, setQuery]= useState('')

    const addQuery = queryStore((state) => state.addQuery)

    const submit =  ()=>{
        addQuery(query)
    }
    const [anchorEl, setAnchorEl] = useState(null)
    const openMenu = Boolean(anchorEl)

    const [ withUser, setWithUser ] = useState(null)

    const setLogin = loginStore(state => state.setLogin)

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const getUser = async () => {
        if (localStorage.getItem("user")) {
            const user = await JSON.parse(localStorage.getItem("user"));
            await setWithUser(user);
        }
    }

    useEffect(() => {
        getUser();
    }, [])


    return(
        <nav style={navbarStyles}>
            <div className="top-container" style={container}>
                <div>
                    <p style={{fontSize: 18}}>{hoy}</p>
                </div>
                <div className="content-input">

                    <input className="ipSearch" style={inputSearch}  name="search" value={query}  onChange={(e)=>setQuery(e.target.value)}type="text"  required placeholder="Enter task name"/>
                    <button className='btnSearch' style={buttonSearch}  onClick={submit}>Search</button>

                </div>

                <div className="content-btnLogin">
                    <Box sx={{ display: 'flex', alignItems: 'center'}} >
                        {withUser && <Avatar
                            sx={{ width: 60, height: 60 }}
                            src={withUser.avatar}
                        /> }
                        {withUser &&
                            <Typography
                                variant="span"
                                fontSize={"21px"}
                                style={styleNameUser}
                            >
                                {withUser.first_name} {withUser.last_name}
                            </Typography>
                        }
                        <ExpandMore
                            onClick={handleOpen}
                            aria-expanded={openMenu ? "true" : undefined}
                        />
                        <Menu
                            open={openMenu}
                            onClose={handleClose}
                            anchorEl={anchorEl}
                        >
                            { withUser && <MenuItem>{withUser ? withUser.email : null}</MenuItem>}
                            <MenuItem onClick={() => { setLogin(false); doLogout() }}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </Box>
                </div>
            </div>
        </nav>
    )
}

const navbarStyles ={
    width: '100%',
    paddingTop: '1%',
    paddingBottom: '1%',
    boxShadow: '0 2px 3px rgb(0,0,0,0.1)'
}

const container = {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
}

const inputSearch = {
    fontSize: '20px',
    padding: '10px',
    width: '60%'
}

const buttonSearch = {
    fontSize: '20px',
    padding: '12px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none'
}

const styleNameUser = {
    paddingLeft: "15px"
}
