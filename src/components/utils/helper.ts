import {UsersType} from "../../redux/users-reducer";

export const objectHelper = (items: UsersType[],itemId:number, newObjProp: { followed: boolean }) => {
    return  items.map(el => el.id === itemId ? {...el, ...newObjProp} : el)
}