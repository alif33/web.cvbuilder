/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from "react-redux"
import Page from "./Page"
export default function image(){
    const { layout } = useSelector(state=>state.sample)

    return(
        <div id="layout" className="pt-5">
            <h1 className="heading">Layout</h1>
            <div className="flex gap-5 pt-7">
                <Page title="Primary" left="primaryLeft" right="primaryRight"/>
                <Page title="Secondary" left="secondaryLeft" right="secondaryRight"/>  
            </div>
            <div className="flex mt-5">
                <Page title="Tertiary" left="tertiaryLeft" right="tertiaryRight"/>
            </div>
        </div>
    )
}