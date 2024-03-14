import React from 'react';
import { Stack } from '@mui/material';
import {categories} from "../utils/constants"
import "./Components.css"

export default function SideBar({selectedCategory,setSelectedCategory}){
 
    return(
        <>
            <Stack
                direction="row" sx={{overflowY:"auto",height:{sx:"auto",md:"95%"},flexDirection:{md:"column"}}}
            >
                {categories.map((category)=>(
                    <button className='category-btn' style={{
                        backgroundColor : category.name === selectedCategory && 'yellow',
                        color : category.name === selectedCategory && 'black',
                    }}
                    key={category.name}
                    onClick={()=>{setSelectedCategory(category.name)}}
                    >
                        <span style={{color:category.name===selectedCategory?"black":"yellow"}}>{category.icon}</span>
                        <span style={{opacity:category.name===selectedCategory?"1":"0.8"}}>{category.name}</span>
                    </button>
                ))}                
            </Stack>
        </>
    )
}