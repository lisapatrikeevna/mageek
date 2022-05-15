import React, {useState} from 'react';
import cl from './header.module.css'
import logo from './../../../assets/Logo.png'
import logoDark from './../../../assets/LogoDark.png'
import {NavLink} from 'react-router-dom';
import './../../../index.css'
import {FormControlLabel} from "@mui/material";
import Switch from '@mui/material/Switch';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import light from './../../../assets/images/light.png'
import dark from './../../../assets/images/night.png'
import {useTranslation} from "react-i18next";
import LanguageIcon from '@mui/icons-material/Language';
import i18next from "i18next";
import cookies from 'js-cookie'
const MaterialUISwitch = styled(Switch)(() => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#9281FF',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url(${dark})`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#433F4C',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        // backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${light})`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        borderRadius: 20 / 2,
    },
}));

type propsType = {
    theme: boolean
    onChange: (value: boolean) => void
}
const Header = ({theme, ...props}: propsType) => {
    let [collapse, setCollapse] = useState(false)
    let [openLang, setOpenLang] = useState(false)
    let onStyle = {}
    if (window.innerWidth < 993) {
        onStyle = {
            visibility: collapse ? "visible" : "collapse"
        }
    }
    const onClickHandler = () => {
        setCollapse(!collapse)
    }
    const onChangeMaterialUISwitch = (e: any) => {
        props.onChange(e.target.checked)
    }

    //Translation
    const {t} = useTranslation();

    return (
        <div className={`${cl.headerWrap} ${!theme ? '' : cl.headerWrapDark}`}
        onClick={()=>setOpenLang(!openLang)}>
            <NavLink to='/' className={cl.logo}>
                <img src={!theme ? logo : logoDark} alt="logo"/>
            </NavLink>
            {window.innerWidth < 993 && <MenuIcon className={cl.menuBtn} onClick={onClickHandler}/>}
            <div className={cl.nav} style={onStyle}>
                <NavLink to='/'>home</NavLink>
                <NavLink to='/services' >{t("page_name_s")}</NavLink>
                {/*<NavLink to='/services'>Услуги</NavLink>*/}
                <NavLink to='/works'>Портфолио</NavLink>
                {/*<NavLink to='/' >Экспертиза</NavLink>*/}
                <NavLink to='/about'>О нас</NavLink>
                <NavLink to='/contacts'>Контакты</NavLink>
                {window.innerWidth<500 &&
                <LangList open={openLang} handleOpen={(v)=>setOpenLang(v)}/>
                }
            </div>
            {window.innerWidth>500 &&
            <LangList open={openLang} handleOpen={(v)=>setOpenLang(v)}/>
            }
            <div className={cl.right}>
                <FormControlLabel
                    // control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked checkedIcon={light}/>}
                    control={<MaterialUISwitch sx={{m: 1}} theme/>}
                    label=" "
                    checked={theme}
                    onChange={onChangeMaterialUISwitch}
                />
                {window.innerWidth > 993 && <button className={cl.contactBtn}>Связаться с нами</button>}
            </div>
        </div>
    );
};

export default Header;

type propsLangListType = {
    open: boolean
    handleOpen: (v: boolean) => void
}
export const LangList = (props: propsLangListType) => {
    const {t, i18n } = useTranslation(['translation']);
    const handleOpen = () => {
        console.log('props.open',props.open);
        props.handleOpen(!props.open)
    }
    const changeLang=(v:string)=>{
        console.log('changeLang',v);
        // i18next.changeLanguage(v)
        i18n.changeLanguage(v)
    }
    const currentLanguageCode = cookies.get('i18next') || 'en'
    return (
        <div style={{position:'relative',marginTop:8}}>
            <LanguageIcon onClick={handleOpen}/>
            <div style={{display:  props.open? 'block': 'none'}}
            className={cl.lang}>
                <div><h1>{t("menu.contacts")}</h1></div>
                <p onClick={() => {changeLang("ru")}} >RU</p>
                <p onClick={() => {changeLang("en")}} >EN</p>
                <p onClick={() => {changeLang("en")}} >{t("title")}</p>
            </div>
        </div>
    )
}
