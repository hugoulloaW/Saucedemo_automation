import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    SAUCEDEMOURL: process.env.SAUCEDEMOURL

}

export const CREDENTIALS = {
    SAUCEDEMOUSER: process.env.SAUCEDEMOUSER,
    SAUCEDEMOPASS: process.env.SAUCEDEMOPASS,
    SAUCEDEMOLOCKEDUSER: process.env.SAUCEDEMOLOCKEDUSER,
    SAUCEDEMOPROBLEMUSER: process.env.SAUCEDEMOPROBLEMUSER,
    SAUCEDEMOGLITCH: process.env.SAUCEDEMOGLITCH
}

export const PERSONALDATA = {
    FIRSTNAME: process.env.FIRSTNAME,
    LASTNAME: process.env.LASTNAME,
    POSTALCODE: process.env.POSTALCODE

}